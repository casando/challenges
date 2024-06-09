document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const close = document.getElementById('close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;
            lightboxImage.src = imgSrc;
            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;
            lightbox.style.display = 'block';
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
