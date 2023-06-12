import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listImg = document.querySelector(".gallery");

let showImg;

galleryItems.forEach((element) => {
    const listImgElement = document.createElement("li");
    const divListImg = document.createElement("div");
    const imgElement = document.createElement("img");
    const linkListImg = document.createElement("a");
    divListImg.classList.add("gallery__item");

    linkListImg.classList.add("gallery__link");
    linkListImg.setAttribute("href", element.original);

    imgElement.setAttribute("data-src", element.original);
    imgElement.setAttribute("src", element.preview);
    imgElement.setAttribute("alt", element.description);
    imgElement.classList.add("gallery__image");
    showImg = basicLightbox.create(imgElement);

    listImg.append(listImgElement);
    listImgElement.append(divListImg);
    divListImg.append(linkListImg);
    linkListImg.append(imgElement);
});

console.log(galleryItems);

console.log(listImg);

imgElement.addEventListener("click", () => {});
