class BookPreview {
  // Constructor for initializing the class
  constructor(bookData, clickHandler) {
    // Instance variables for storing book data and click handler
    this.bookData = bookData;
    this.clickHandler = clickHandler;

    // Creating the preview element for the book
    this.previewElement = this.createPreviewElement();

    // Attaching a click event to the preview element
    this.attachClickEvent();
  }

  // Method for creating the preview element
  createPreviewElement() {
    // Extracting data from the book and creating the HTML structure
    const { id, image, title, author } = this.bookData;
    const preview = document.createElement("button");
    preview.classList = "preview";
    preview.setAttribute("data-preview", id);
    preview.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${author}</div>
        </div>
      `;
    return preview;
  }

  // Method for attaching a click event to the preview element
  attachClickEvent() {
    this.previewElement.addEventListener("click", this.clickHandler);
  }

  // Method for retrieving the preview element
  getPreviewElement() {
    return this.previewElement;
  }
}
