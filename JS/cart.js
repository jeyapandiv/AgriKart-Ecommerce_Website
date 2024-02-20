"use strict";

document.addEventListener("DOMContentLoaded", function () {
    updateCartItemCount();
    updateCart();

    // Event listener for quantity inputs
    var quantityInputs = document.querySelectorAll('.item input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateCart);
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
        var priceElement = item.querySelector('.price');
        var price = parseFloat(priceElement.textContent.replace('₹', ''));
        var quantity = parseInt(item.querySelector('input[type="number"]').value);
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