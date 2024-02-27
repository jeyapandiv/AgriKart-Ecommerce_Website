var smallImages = document.querySelectorAll('.small-Img');

var featuredImage = document.getElementById('featured-image');

smallImages.forEach(smallImg => {
    smallImg.addEventListener('click', function() {
      
        featuredImage.src = this.src;
    });
});


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

const addcart = document.getElementById('addcart');
addcart.addEventListener('click', () => {
    const productName = document.querySelector('.product-name').textContent;
    const price = document.querySelector('.product-price').textContent.split(': ')[1];
    const weight = document.querySelector('.product-weight').textContent.split(': ')[1];
    const imgSrc = document.querySelector('.main-img img').src;
    console.log(productName,price,weight,imgSrc)
    // Navigate to cart page and pass product details via query parameters or localStorage
    // window.location.href = `cart.html?productName=${productName}&price=${price}&weight=${weight}&imgSrc=${imgSrc}`;
    window.location.href = "cart.html"
});



