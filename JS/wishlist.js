
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
        var productNameCell = document.createElement('td');
        var productImageCell = document.createElement('td');
        var productPriceCell = document.createElement('td');
        var productStatusCell = document.createElement('td');

        // Assign values to cells
        productNameCell.textContent = item.ProductName;
        productImageCell.innerHTML = '<img src="' + item.ProductImage + '" alt="Product Image">';
        productPriceCell.textContent = item.ProductPrice;
        productStatusCell.innerHTML = '<div class="product-status"><span class="in-stock"></span>In Stock</div>';

        // Append cells to the row
        row.appendChild(productNameCell);
        row.appendChild(productImageCell);
        row.appendChild(productPriceCell);
        row.appendChild(productStatusCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to display the wishlist when the page loads
displayWishlist(); 


