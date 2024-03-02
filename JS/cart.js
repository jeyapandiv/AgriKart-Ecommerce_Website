"use strict";

// ---------------------------------

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
    var delivery =document.querySelector('.delivery')
    itemTotalDisplay.textContent = `Item Total: ₹${itemTotal}`;

    var deliveryCharges;
    if(cartData.length==0){
        deliveryCharges=0
    }
    else if (cartData.length <=2){
        deliveryCharges =30
    }
    else if(cartData.length <=10){
        deliveryCharges =60
    }
   
    var totalBill = itemTotal + deliveryCharges;

    var totalBillDisplay = document.querySelector('.summary h3');
    delivery.textContent =deliveryCharges
    totalBillDisplay.textContent = `Total Bill: ₹${totalBill}`;
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

// -------------------------

const cartData = JSON.parse(localStorage.getItem('cart'));
console.log(cartData)

const cartItemsContainer = document.getElementById('cart-things');


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
    }); var quantityInputs = document.querySelectorAll('.item input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('input', function(event) {
            var quantity = parseInt(event.target.value);
            if (quantity === 0) {
                deleteItem(event);
                updateCart()
            } else {
                updateCart();
            }
        });
    });

    var deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', deleteItem);
    });
});

// Function to delete an item
function deleteItem(event) {
    var itemDiv = event.target.closest('.item');
    var index = getIndex(itemDiv);
    itemDiv.remove();


    removeItemFromLocalStorage(index);

    updateCartItemCount();
    updateCart();
}


// Function to get the index of an element within its container
function getIndex(element) {
    var index = 0;
    while ((element = element.previousElementSibling) != null) {
        index++;
    }
    return index;
}

// Function to remove item from local storage
function removeItemFromLocalStorage(index) {
    var cartData = JSON.parse(localStorage.getItem('cart'));
    if (index >= 0 && index < cartData.length) { 
        cartData.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartData));
        console.log(cartData);
        if (cartData.length === 0) {
            localStorage.removeItem('cart'); 
        }
    } else {
        console.log("Index out of range or invalid.");
    }
}



console.log(cartData.length);