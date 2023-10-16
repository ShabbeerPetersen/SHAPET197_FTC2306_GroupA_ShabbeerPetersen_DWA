//@ts-check

// import { books, authors } from "./data.js";
// import { selectors } from "./scripts.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
.preview {
    border-width: 0;
    width: 100%;
    font-family: Roboto, sans-serif;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    border-radius: 8px;
    border: 1px solid rgba(var(--color-dark), 0.15);
    background: rgba(var(--color-light), 1);
  }
  
  @media (min-width: 60rem) {
    .preview {
      padding: 1rem;
    }
  }
  
  .preview_hidden {
    display: none;
  }
  
  .preview:hover {
    background: rgba(var(--color-blue), 0.05);
  }
  
  .preview__image {
    width: 48px;
    height: 70px;
    object-fit: cover;
    background: grey;
    border-radius: 2px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  }
  
  .preview__info {
    padding: 1rem;
  }
  
  .preview__title {
    margin: 0 0 0.5rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .preview__author {
    color: rgba(var(--color-dark), 0.4);
  }
  
  /* overlay */
  
  .overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-width: 0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    animation-name: enter;
    animation-duration: 0.6s;
    z-index: 10;
    background-color: rgba(var(--color-light), 1);
  }
  
  @media (min-width: 30rem) {
    .overlay {
      max-width: 30rem;
      left: 0%;
      top: 0;
      border-radius: 8px;;
    }
  }
  
  .overlay__form {
    padding-bottom: 0.5rem;
    margin: 0 auto;
  }
  
  .overlay__row {
    display: flex;
    gap: 0.5rem;
    margin: 0 auto;
    justify-content: center;
  }
  
  .overlay__button {
    font-family: Roboto, sans-serif;
    background-color: rgba(var(--color-blue), 0.1);
    transition: background-color 0.1s;
    border-width: 0;
    border-radius: 6px;
    height: 2.75rem;
    cursor: pointer;
    width: 50%;
    color: rgba(var(--color-blue), 1);
    font-size: 1rem;
    border: 1px solid rgba(var(--color-blue), 1);
  }
  
  .overlay__button_primary {
    background-color: rgba(var(--color-blue), 1);
    color: rgba(var(--color-force-light), 1);
  }
  
  .overlay__button:hover {
    background-color: rgba(var((var(--color-blue))), 0.2);
  }
  
  
  .overlay__button_primary:hover {
    background-color: rgba(var(--color-blue), 0.8);
    color: rgba(var(--color-force-light), 1);
  }
  
  .overlay__input {
    width: 100%;
    margin-bottom: 0.5rem;
    background-color: rgba(var(--color-dark), 0.05);
    border-width: 0;
    border-radius: 6px;
    width: 100%;
    height: 4rem;
    color: rgba(var(--color-dark), 1);
    padding: 1rem 0.5rem 0 0.75rem;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    cursor: pointer;
  }
  
  .overlay__input_select {
    padding-left: 0.5rem;
  }
  
  .overlay__field {
    position: relative;
    display: block;
  }
  
  .overlay__label {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.85rem;
    color: rgba(var(--color-dark), 0.4);
  }
  
  .overlay__input:hover {
    background-color: rgba(var(--color-dark), 0.1);
  }
  
  .overlay__title {
    padding: 1rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.1px;
    max-width: 25rem;
    margin: 0 auto;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .overlay__blur {
    width: 100%;
    height: 200px;
    filter: blur(10px);
    opacity: 0.5;
    transform: scale(2);
  }
  
  .overlay__image {
    max-width: 10rem;
    position: absolute;
    top: 1.5m;
    left: calc(50% - 5rem);
    border-radius: 2px;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  }
  
  .overlay__data {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .overlay__data_secondary {
    color: rgba(var(--color-dark), 0.6)
  }
  
  .overlay__content {
    padding: 2rem 1.5rem;
    text-align: center;
    padding-top: 3rem;
  }
  
  .overlay__preview {
    overflow: hidden;
    margin: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .overlay__background {
    background: rgba(var(--color-dark), 0.6);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
</style>
<dialog class="overlay" data-list-active open>
      <div class="overlay__preview"><img class="overlay__blur" data-list-blur src=""/><img class="overlay__image" data-list-image src=""/></div>
      <div class="overlay__content">
        <h3 class="overlay__title" data-list-title></h3>
        <div class="overlay__data" data-list-subtitle></div>
        <p class="overlay__data overlay__data_secondary" data-list-description></p>
      </div>

      <div class="overlay__row">
        <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
      </div>
    </dialog>
`;

class Component extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    shadow.querySelector("[data-list-image]").src = dataObje.image;
    shadow.querySelector("[data-list-blur]").src = dataObje.image;
    shadow.querySelector("[data-list-title]").innerText = dataObje.previewTitle;
    shadow.querySelector("[data-list-subtitle]").innerText =
      dataObje.previewSubtitle;
    shadow.querySelector("[data-list-description]").innerText =
      dataObje.previewDescription;
  }
}

customElements.define("single-preview", Component);

const dataObje = {
  image: undefined,
  previewTitle: undefined,
  previewSubtitle: undefined,
  previewDescription: undefined,
};

// This function will open up a preview of the targeted book
export const viewBook = (event) => {
  const { target } = event;
  if (selectors.bookView.open === false) {
    selectors.bookView.showModal();
  } else if (target === selectors.bookCloseView) {
    selectors.bookView.close();
  }
  for (const book of books) {
    if (
      target.getAttribute("data-preview") === book.id ||
      target.parentNode.parentNode.getAttribute("data-preview") === book.id ||
      target.parentNode.getAttribute("data-preview") === book.id
    ) {
      selectors.bookImageView.src = book.image;
      selectors.viewBlur.src = book.image;
      selectors.bookTitleView.textContent = book.title;
      selectors.bookSubtitleView.textContent = `${
        authors[book.author]
      } (${new Date(book.published).getFullYear()})`;
      selectors.bookDescriptionView.textContent = book.description;
      dataObje.image = book.image;
      dataObje.previewTitle = book.title;
      dataObje.previewSubtitle = `${authors[book.author]} (${new Date(
        book.published
      ).getFullYear()})`;
      dataObje.previewDescription = book.description;
      document.body.innerHTML = `<single-preview></single-preview>`;
    }
  }
  console.log(dataObje);
};
