/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}

const galleryItemsMarkup = galleryItems.map(createGalleryItem).join("");
gallery.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", function () {});

lightbox.on("close.simplelightbox", function () {});
