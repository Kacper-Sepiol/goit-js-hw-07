import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listImg = document.querySelector(".gallery");

const createItems = galleryItems
    .map((item) => {
        return `<li>
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>`;
    })
    .join("");

listImg.innerHTML = createItems;

const lightBox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionPosition: "bottom",
});
