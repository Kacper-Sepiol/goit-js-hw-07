import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listImg = document.querySelector(".gallery");

const createItems = galleryItems
    .map((item) => {
        return `
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`;
    })
    .join("");

listImg.innerHTML = createItems;

var lightbox = new SimpleLightbox(".gallery");

console.log(galleryItems);
