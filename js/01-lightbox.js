import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const galleryConteiner = document.querySelector(`.gallery`);

const galleryImages = galleryItems
	.reduce((acum, galleryItems) =>
		acum += `<a class="gallery__item" href="${galleryItems.original}">
		<img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}"/>
	</a>`, '');

galleryConteiner.innerHTML = galleryImages;

new SimpleLightbox(".gallery a", {
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});
