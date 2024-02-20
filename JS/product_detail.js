var smallImages = document.querySelectorAll('.small-Img');

var featuredImage = document.getElementById('featured-image');

smallImages.forEach(smallImg => {
    smallImg.addEventListener('click', function() {
      
        featuredImage.src = this.src;
    });
});





