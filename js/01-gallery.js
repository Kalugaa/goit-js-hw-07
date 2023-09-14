/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let currentLightboxInstance = null;

function openModal(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;

  const imageUrl = event.target.dataset.source;
  const imageAlt = event.target.alt;

  if (currentLightboxInstance) {
    currentLightboxInstance.close();
  }

  const instance = basicLightbox.create(`
    <img src="${imageUrl}" alt="${imageAlt}">
  `);

  instance.show();
  currentLightboxInstance = instance;

  document.addEventListener("keydown", closeModalOnEscape);
}

function closeModalOnEscape(event) {
  if (event.key === "Escape") {
    currentLightboxInstance.close();
    document.removeEventListener("keydown", closeModalOnEscape);
  }
}

const galleryItemsMarkup = galleryItems.map(
  (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
      </a>
    </li>
  `
);

gallery.innerHTML = galleryItemsMarkup.join("");
gallery.addEventListener("click", openModal);
