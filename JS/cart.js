"use strict";

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

    var deliveryCharges = 30;
    var totalBill = itemTotal + deliveryCharges;

    var totalBillDisplay = document.querySelector('.summary h3');
    totalBillDisplay.textContent = `Total Bill: ₹${totalBill}`;
}
// -------------------------------------

function emptyCart() {
    var cartItems = document.querySelectorAll('.item');
    cartItems.forEach(item => {
        item.remove();
    });
    updateCartItemCount();
    updateCart(); // Update cart total after emptying the cart
}

// -------------------------
// Retrieve cart data from local storage
const cartData = JSON.parse(localStorage.getItem('cart'));
console.log(cartData)
// Get the container where item divs will be appended
const cartItemsContainer = document.getElementById('cart-things');

// Check if cartData exists and is an array
if (Array.isArray(cartData)) {
    // Iterate over each product in the cart
    cartData.forEach(product => {
        // Create a new item div
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        // Populate the item div with product details
        itemDiv.innerHTML = `
            <img class="product-img" src="${product.ProductImage}" alt="${product.ProductName}">
            <div class="item-details">
                <h3 class="product-name">${product.ProductName}</h3>
                <p class="product-price">${product.ProductPrice}</p>
                <p class="product-weight">${product.ProductWeight}</p>
            </div>
            <div class="end">
                <input class="product-qty" type="number" value="${product.ProductQty}">
                <i class="fa-solid fa-trash"></i>
            </div>
        `;

        // Append the item div to the container
        cartItemsContainer.appendChild(itemDiv);
    });
} else {
    // Handle case where cartData is not found or not an array
    console.log('No cart data found in local storage.');
}