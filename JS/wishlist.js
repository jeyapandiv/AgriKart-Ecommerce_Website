
function displayWishlist() {
    // Get wishlist from local storage
    var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Get table body element
    var tableBody = document.querySelector('#wishlist-table-body');

    // Clear existing rows
    tableBody.innerHTML = '';

    // Loop through each item in the wishlist
    wishlist.forEach(function(item, index) {
        // Create a new table row
        var row = document.createElement('tr');

        // Create cells for product name, image, price, and status
        var productImageCell = document.createElement('td');
        
        var productPriceCell = document.createElement('td');
        var productStatusCell = document.createElement('td');
        var productCartCell = document.createElement('td')

        // Assign values to cells
        productImageCell.innerHTML = '<div class="prd-img"><img src="' + item.ProductImage + '" alt="Product Image">  <div class="product-info"> <h4>' + item.ProductName + '</h4></div> </div>';
        productPriceCell.textContent = item.ProductPrice;
        productStatusCell.innerHTML = '<div class="product-status"><span class="in-stock"></span>In Stock</div>';
        productCartCell.innerHTML = '<div class="product-action"><button class="wish-cart">Add To Cart</button> <i class="fa-solid fa-trash delete-icon"></i></div>'

        // Append cells to the row
       
        row.appendChild(productImageCell)
        row.appendChild(productPriceCell);
        row.appendChild(productStatusCell);
        row.appendChild(productCartCell);
       

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to display the wishlist when the page loads
displayWishlist(); 


