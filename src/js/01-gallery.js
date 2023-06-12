import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "basiclightbox";

const listImg = document.querySelector(".gallery");

galleryItems.forEach((element) => {
    const listImgElement = document.createElement("li");
    const divListImg = document.createElement("div");
    const linkListImg = document.createElement("a");
    const imgElement = document.createElement("img");

    divListImg.classList.add("gallery__item");

    linkListImg.classList.add("gallery__link");
    linkListImg.setAttribute("href", element.original);

    imgElement.setAttribute("data-src", element.original);
    imgElement.setAttribute("src", element.preview);
    imgElement.setAttribute("alt", element.description);
    imgElement.classList.add("gallery__image");

    listImg.append(listImgElement);
    listImgElement.append(divListImg);
    divListImg.append(linkListImg);
    linkListImg.append(imgElement);
});

console.log(galleryItems);

console.log(listImg);
