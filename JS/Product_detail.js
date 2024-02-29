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
function storeProductDetails() {
   
    let productName = document.querySelector('.product-name').innerText;
    let productWeight = document.querySelector('.product-weight').innerText;
    let productPrice = document.querySelector('.product-price').innerText;
    let productQty = document.querySelector('.product-qty').value;
    let productImg = document.querySelector('.product-img').src;


    let productDetails = {
        ProductName: productName,
        ProductQty: productQty,
        ProductImage: productImg,
        ProductPrice: productPrice,
        ProductWeight: productWeight,
    };

   
    if (localStorage.getItem('cart')) {
     
        let cart = JSON.parse(localStorage.getItem('cart'));
        
     
        cart.push(productDetails);

       
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('cart-pushed')
        console.log(cart);
    } else {
       
        localStorage.setItem('cart', JSON.stringify([productDetails]));
        console.log('cart-created')
        console.log(cart)

    }
}

function addToWishlist() {
    // Get product details
    var productName = document.querySelector('.product-name').textContent;
    var productImage = document.querySelector('.product-img').src;
    var productPrice = document.querySelector('.product-price').textContent;
    
   
    var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
  
    wishlist.push({
        "ProductName": productName,
        "ProductImage": productImage,
        "ProductPrice": productPrice
    });
  
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}


document.querySelector('.heart').addEventListener('click', addToWishlist);

// let addcart = document.getElementById('addcart');
// addcart.addEventListener('click', () => {
//     let productName = document.querySelector('.product-name').textContent;
//     let price = document.querySelector('.product-price').textContent.split(': ')[1];
//     let weight = document.querySelector('.product-weight').textContent.split(': ')[1];
//     let imgSrc = document.querySelector('.main-img img').src;
//     console.log(productName,price,weight,imgSrc)
//     // Navigate to cart page and pass product details via query parameters or localStorage
//     // window.location.href = `cart.html?productName=${productName}&price=${price}&weight=${weight}&imgSrc=${imgSrc}`;
//     window.location.href = "cart.html"
// });



