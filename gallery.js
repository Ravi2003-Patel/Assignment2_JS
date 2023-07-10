window.addEventListener('DOMContentLoaded', function() {
    var featuredImage = document.getElementById('featuredImage');
    var imageTitle = document.getElementById('imageTitle');
    var thumbnails = document.getElementsByClassName('thumbnail');
    
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            var thumbnailSrc = this.getAttribute('src');
            var largeSrc = thumbnailSrc.replace('-small', '-large');
            var thumbnailAlt = this.getAttribute('alt');
            
            featuredImage.setAttribute('src', largeSrc);
            featuredImage.setAttribute('alt', thumbnailAlt);
            imageTitle.textContent = thumbnailAlt;
        });
    }
});