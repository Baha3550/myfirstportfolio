const imageButtons = document.querySelectorAll(".image-button");
const imagePreview = document.querySelector("#image-preview");
const previewImage = document.querySelector("#preview-image");
const closePreview = document.querySelector("#close-preview");

imageButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const image = button.querySelector("img");

        previewImage.src = image.src;
        previewImage.alt = image.alt;

        imagePreview.showModal();

    });

});

closePreview.addEventListener("click", function() {

    imagePreview.close();

});