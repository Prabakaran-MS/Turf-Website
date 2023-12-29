const carousel = document.querySelector(".carousel-inner");

function loadCarousel(imgs) {
    let c = 0;

    imgs.forEach(img => {
        const div = document.createElement('div');
        if (c === 0) {
            div.className = "carousel-item active"
        } else {
            div.className = "carousel-item"
        }
        c += 1;
        div.innerHTML = `<img class="d-block w-100" src="${img}" alt="Image ${c}">`;

        carousel.appendChild(div);
    });
}

loadCarousel([
    "../images/carousel/img1.jpg",
    "../images/carousel/img2.jpg",
    "../images/carousel/img3.jpg",
    "../images/carousel/img4.jpg",
    "../images/carousel/img5.jpg",
    "../images/carousel/img6.jpg",
    "../images/carousel/img7.jpg"
]);
