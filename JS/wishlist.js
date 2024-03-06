fetch('navBar.html')
.then(response => response.text())
.then(data => {
    document.querySelector('.pdNav').innerHTML += data;
});

function navigationMain() {
    window.location.href = "index.html";
}

function displayWishlist() {
    var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    var tableBody = document.querySelector('#wishlist-table-body');

    tableBody.innerHTML = '';

    wishlist.forEach(function(item, index) {
        var row = document.createElement('tr');
        var productImageCell = document.createElement('td');
        var productPriceCell = document.createElement('td');
        var productStatusCell = document.createElement('td');
        var productCartCell = document.createElement('td');

        productImageCell.innerHTML = '<div class="prd-img"><img src="' + item.ProductImage + '" alt="Product Image">  <div class="product-info"> <h4>' + item.ProductName + '</h4></div> </div>';
        productPriceCell.textContent = item.ProductPrice;
        productStatusCell.innerHTML = '<div class="product-status"><span class="in-stock"></span>In Stock</div>';
        productCartCell.innerHTML = '<div class="product-action"><button class="wish-cart">Add To Cart</button> <i class="fa-solid fa-trash delete-icon"></i></div>';

        row.appendChild(productImageCell);
        row.appendChild(productPriceCell);
        row.appendChild(productStatusCell);
        row.appendChild(productCartCell);

        tableBody.appendChild(row);

        // Add event listener to delete icon
        var deleteIcon = productCartCell.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', function() {
            removeFromWishlist(index);
            displayWishlist();
        });
    });
}

function removeFromWishlist(index) {
    var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
}

displayWishlist();


function navigationMain() {
    window.location.href = "index.html";
  }


function cartIconPageNavigate(icon) {
    window.location.href = "cart.html";
  }