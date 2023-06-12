import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listImg = document.querySelector(".gallery");

const createItems = galleryItems
    .map((item) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
        </div>`;
    })
    .join("");

listImg.innerHTML = createItems;

const imgPreview = (event) => {
    event.preventDefault();

    if (event.target.classList.contains("gallery")) return;
    const source = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${source}">`);

    instance.show();
};

listImg.addEventListener("click", imgPreview);

console.log(listImg);
