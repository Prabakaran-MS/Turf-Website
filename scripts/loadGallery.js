let galleryContentContainer = document.getElementById("galleryContent");

function loadGallery(imageSources) {

    imageSources.forEach(source => {
        let colDiv = document.createElement("div");
        colDiv.className = "col";

        let cardDiv = document.createElement("div");
        cardDiv.className = "card";

        let imgElement = document.createElement("img");
        imgElement.src = source;
        imgElement.className = "card-img-top";
        imgElement.alt = "Image";

        cardDiv.appendChild(imgElement);
        colDiv.appendChild(cardDiv);
        galleryContentContainer.appendChild(colDiv);
    });
}

let imageSources = [
    "../images/carousel/img1.jpg",
    "../images/carousel/img2.jpg",
    "../images/carousel/img3.jpg"
    // Add more image sources as needed
];

loadGallery(imageSources);
