var smallImages = document.querySelectorAll('.small-Img');

var featuredImage = document.getElementById('featured-image');



smallImages.forEach(smallImg => {
    smallImg.addEventListener('click', function() {
      
        featuredImage.src = this.src;
    });
});

function cartIconPageNavigate() {
    window.location.href = "cart.html"
  }
  function navigationMain() {
    window.location.href = "index.html";
  }
//---------------------- increment - decrement --------------------------

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let quantity_count = document.getElementById("quantity-count");

let count = 1;

plus.addEventListener("click", () => {
    count++;
    quantity_count.value = count;
});

minus.addEventListener("click", () => {
    if (count >= 1) {
        count--;
        quantity_count.value = count;
    }
});


// --------------------------------------
function storeProductDetails(btn) {
    // Extracting product details
    const productName = document.querySelector('.product-name').innerText;
    const productWeight = document.querySelector('.product-weight').innerText;
    const productPrice = document.querySelector('.product-price').innerText;
    const productQty = document.querySelector('.product-qty').value;
    const productImg = document.querySelector('.product-img').src; // Assuming you want the src attribute

    // Creating product detail object
    const productDetails = {
        ProductName: productName,
        ProductQty: productQty,
        ProductImage: productImg,
        ProductPrice: productPrice,
        ProductWeight: productWeight,
    };

    // Check if "cart" exists in local storage
    if (localStorage.getItem('cart')) {
        // Parse the existing cart from local storage
        let cart = JSON.parse(localStorage.getItem('cart'));
        
        // Add the new product details to the cart array
        cart.push(productDetails);

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log('cart-pushed')
        // console.log(cart);
    } else {
        // If the cart does not exist, create a new cart array with the product
        localStorage.setItem('cart', JSON.stringify([productDetails]));
        // console.log('cart-created')
        // console.log(cart)

    }

}

function navigateCheckout(btn) {
    window.location.href = "checkout.html";
}

// const addcart = document.getElementById('addcart');
// addcart.addEventListener('click', () => {
//     const productName = document.querySelector('.product-name').textContent;
//     const price = document.querySelector('.product-price').textContent.split(': ')[1];
//     const weight = document.querySelector('.product-weight').textContent.split(': ')[1];
//     const imgSrc = document.querySelector('.main-img img').src;
//     console.log(productName,price,weight,imgSrc)
//     // Navigate to cart page and pass product details via query parameters or localStorage
//     // window.location.href = `cart.html?productName=${productName}&price=${price}&weight=${weight}&imgSrc=${imgSrc}`;
//     window.location.href = "cart.html"
// });



