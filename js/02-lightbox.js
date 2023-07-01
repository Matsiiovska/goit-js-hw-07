import { galleryItems } from './gallery-items.js';


// Change code below this line
const container = document.querySelector(".gallery");
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc+= `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="galery-image" src="${preview}" alt="${description}" width="300"/>
</a>
</li>`, '');


container.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


