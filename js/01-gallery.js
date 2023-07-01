
import { galleryItems } from './gallery-items.js';
/*import * as basicLightbox from 'basiclightbox';*/

// Change code below this line

console.log(galleryItems);


const container = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img data-source="${original}" src="${preview}" class="galery-image" alt="${description}" width="300"/>
</a>
</li>`);


container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick);

const instance = basicLightbox.create(
    `<img width="1000" height="auto" src=""/>`
);

function onClick(evt) {
  evt.preventDefault();
  const datasetSource = evt.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
};

document.addEventListener('keydown', onEscKeyPress);


function onEscKeyPress(evt) {
  if (evt.code !== 'Escape') return;
  instance.close();/*Закриває відкрите вікно*/ 
};

