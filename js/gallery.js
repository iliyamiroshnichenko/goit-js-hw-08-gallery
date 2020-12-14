import gallery from "./gallery-items.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const refs = {
  galleryList: document.querySelector(".js-gallery"),
};

const createElement = ({ preview, original, description }) => {
    return refs.galleryList.insertAdjacentHTML(
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
      alt=${description}
    />
  </a>
</li>`
    );
}

gallery.map((image) => createElement(image));
