// Start script up once the DOM is ready
document.addEventListener('DOMContentLoaded',function () {
  const myLibrary = [];
  const librarySection = document.querySelector('.library');
  const addBookForm = document.querySelector('.add-book-form')
  const newBookButton = document.querySelector('#new-book-button');

  function Book (title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.info = function bookInfo() {
        return this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
      }
  }

  function addBooktoLibrary () {

  }

  function displayLibrary (books) {
    books.forEach(book => {
      const newCard = createCardElement('div', 'card');
      
      const title = createCardElement('h3', 'title', book.title);
      const author = createCardElement('p', 'author', book.author);
      const pages = createCardElement('p', 'pages', book.pages);
      const read = createCardElement('p', 'read', book.read);

      newCard.appendChild(title);
      newCard.appendChild(author);
      newCard.appendChild(pages);
      newCard.appendChild(read);

      librarySection.appendChild(newCard);
    });
  }

  function createCardElement(tagName, className, textContent) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    if (textContent) {
      element.textContent = textContent;
    }
    return element;
  }

  newBookButton.addEventListener('click', () => {

  })

  const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkein', '295 pages', 'Not yet read');
  const atomicHabits = new Book('Atomic Habits', 'James Clear', '306 pages', 'Read');
  const howToWinFriends = new Book('How to Win Friends and Influence People', 'Dale Carnegie', '260 pages', 'In Progress');

  myLibrary.push(theHobbit, atomicHabits, howToWinFriends);
  displayLibrary(myLibrary);
});