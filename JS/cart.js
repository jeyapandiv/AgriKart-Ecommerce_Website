"use strict";


fetch('navBar.html')
.then(response => response.text())
.then(data => {
    document.querySelector('.pdNav').innerHTML += data;
});


function wishIconPageNavigate(icon) {
    window.location.href = "wishlist.html";
  }
  
  function navigationMain() {
    window.location.href = "index.html";
  }

// --------------------------------- function to update cart item count on top

document.addEventListener("DOMContentLoaded", function () {
    updateCartItemCount();
    updateCart();

    // Event listener for quantity inputs
    var quantityInputs = document.querySelectorAll('.item input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('product-qty', updateCart);
    });
});

// Function to update cart item count
function updateCartItemCount() {
    var itemCount = document.querySelectorAll('.item').length;
    var cartHeader = document.querySelector('main h2');
    cartHeader.textContent = "Cart (" + itemCount + " Items)";
}

// Function to update cart
function updateCart() {
    let itemTotal = 0;
    var items = document.querySelectorAll('.item');

    items.forEach(item => {
        var priceElement = item.querySelector('.product-price');
        var price = parseFloat(priceElement.textContent.replace('₹', ''));
        var quantity = parseInt(item.querySelector('.product-qty').value);
        itemTotal += price * quantity;
        if (quantity === 0) {
            item.remove();
            updateCartItemCount();
        }
    });
    var itemTotalDisplay = document.querySelector('.summary p:nth-of-type(1)');
    itemTotalDisplay.textContent = `Item Total: ₹${itemTotal}`;

    var totalBillDisplay = document.querySelector('.summary h3');
    totalBillDisplay.textContent = `Total Bill: ₹${itemTotal}`;
}
// -------------------------------------


function emptyCart() {
    var cartItems = document.querySelectorAll('.item');
    cartItems.forEach(item => {
        item.remove();
        
    });
    updateCartItemCount();
    updateCart(); 

    // Remove items from local storage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith('cart')) { 
            localStorage.removeItem(key);
        }
    }
}

// -------------------------creating item div dynamically with the count of indexes in array

const cartData = JSON.parse(localStorage.getItem('cart'));
// console.log(cartData)

const cartItemsContainer = document.getElementById('cart-things-2');


if (Array.isArray(cartData)) {

    cartData.forEach(product => {
      
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        
        itemDiv.innerHTML = `
            <img class="product-img" src="${product.ProductImage}" alt="${product.ProductName}">
            <div class="item-details">
                <h3 class="product-name">${product.ProductName}</h3>
                <p class="product-price">${product.ProductPrice}</p>
                <p class="product-weight">${product.ProductWeight}</p>
            </div>
            <div class="end">
                <input class="product-qty" type="number" value="${product.ProductQty}">
                <i class="fa-solid fa-trash delete-icon"></i>
            </div>
        `;

        
        cartItemsContainer.appendChild(itemDiv);
    });
} else {
   
    console.log('No cart data found in local storage.');
}
// ------------------------
document.addEventListener("DOMContentLoaded", function () {
    updateCartItemCount();
    updateCart();

    // Event listener for quantity inputs
    var quantityInputs = document.querySelectorAll('.item input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateCart);
    });

    // Event listener for deleting items
    var deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach((icon, index) => {
        icon.addEventListener('click', function(event) {
            deleteItem(event, index); 
        });
    });
});

// Function to delete an item
function deleteItem(event, index) {
    var itemDiv = event.target.closest('.item');
  
    itemDiv.remove();
    
 
    removeItemFromLocalStorage(index);

    updateCartItemCount();
    updateCart();
}

// Function to remove item from local storage
function removeItemFromLocalStorage(index) {
    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    if (index >= 0 && index < cartData.length) {
        cartData.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartData));
    }
    updateCartItemCount();
    updateCart();
}

var proceedToBuyBtn = document.getElementById('proceedToBuyBtn');
proceedToBuyBtn.addEventListener('click', function() {
  
    window.location.href = 'checkout.html';
});


console.log(cartData.length);
