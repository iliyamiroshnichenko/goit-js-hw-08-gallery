import gallery from "./gallery-items.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const refs = {
  galleryList: document.querySelector(".js-gallery"),
  lightBox: document.querySelector(".js-lightbox"),
  bigImg: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector(".lightbox__button"),
};

const createElement = ({ preview, original, description }) =>
  refs.galleryList.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt='${description}'
    />
  </a>
</li>`
  );

gallery.map((image) => createElement(image));

//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
refs.galleryList.addEventListener("click", onGalleryClick);
refs.closeBtn.addEventListener('click', onCloseModal);

function onGalleryClick(event) {
  event.preventDefault();
  const imgRef = event.target;
  if (imgRef.nodeName !== "IMG") {
    return;
  }
  const bigImgURL = imgRef.dataset.source;
  setBigImgSrc(bigImgURL, imgRef.alt);
  onOpenModal();
}

function setBigImgSrc(url, alt) {
    refs.bigImg.src = url;
    refs.bigImg.alt = alt;
}

function onOpenModal() {
  refs.lightBox.classList.add("is-open");
}
function onCloseModal() {
  refs.lightBox.classList.remove("is-open");
  refs.bigImg.src = '';
  refs.bigImg.alt = '';
}


