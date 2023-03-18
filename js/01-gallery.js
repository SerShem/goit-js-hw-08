import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector(`.gallery`);

const galleryImages = galleryItems
	.reduce((acum, galleryItems) =>
		acum += `<div class="gallery__item">
							<a class="gallery__link" href="${galleryItems.original}">
								<img class="gallery__image" src="${galleryItems.preview}" data-sourse="${galleryItems.original}" alt="${galleryItems.description}"/>
							</a>
						</div>`, '')

galleryConteiner.innerHTML = galleryImages;

galleryConteiner.addEventListener('click', (evt) => {
	evt.preventDefault();

	if (evt.target.nodeName !== 'IMG' || evt.target === evt.currentTarget) {
		return;
	}
	const instance = basicLightbox.create(`<img src="${evt.target.dataset.sourse}" alt="${evt.target.alt}" width="1280"/>`,
		{
			onShow: () => galleryConteiner.addEventListener('keydown', onEscKeyPress),
			onClose: () => galleryConteiner.removeEventListener('keydown', onEscKeyPress),
		});
	instance.show();
	function onEscKeyPress(evt) {
		if (evt.code === "Escape") {
			instance.close();
		};
	};
});
