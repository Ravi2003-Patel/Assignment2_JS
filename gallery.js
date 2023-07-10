window.addEventListener('DOMContentLoaded', function() {
    // Get the featured image element and the image title element
    var featuredImage = document.getElementById('featuredImage');
    var imageTitle = document.getElementById('imageTitle');
    // Get all the thumbnail images
    var thumbnails = document.getElementsByClassName('thumbnail');

    // Loop through each thumbnail image and add a click event listener
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            // Get the source and alt attributes of the clicked thumbnail
            var thumbnailSrc = this.getAttribute('src');
            var largeSrc = thumbnailSrc.replace('-small', '-large');
            var thumbnailAlt = this.getAttribute('alt');
            
            // Update the featured image source, alt, and image title
            featuredImage.setAttribute('src', largeSrc);
            featuredImage.setAttribute('alt', thumbnailAlt);
            imageTitle.textContent = thumbnailAlt;
        });
    }
});
