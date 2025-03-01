document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const images = [
        'images/image1.jpeg',
        'images/image2.png',
        'images/image3.jpeg',
        'images/image4.jpeg',
        'images/image5.jpeg',
        'images/image6.png',
        'images/image7.jpeg',
        'images/image8.jpeg',
        'images/image9.png',
        'images/image10.jpeg',
        'images/image11.jpeg',
        'images/image12.jpeg'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(images);

    gallery.innerHTML = '';

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery Image';
        gallery.appendChild(img);
    });
});
