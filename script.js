// Start script up once the DOM is ready
document.addEventListener('DOMContentLoaded',function () {
  const myLibrary = [];
  const librarySection = document.querySelector('.library');
  // const addBookForm = document.getElementById('form');
  // const newBookButton = document.querySelector('#new-book-button');
  const submitNewBookButton = document.getElementById('submit');

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

  submitNewBookButton.addEventListener('click', submitBookClick);

  function submitBookClick(event) {
    event.preventDefault();

    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPages = document.getElementById('pages').value;
    const newRead = document.getElementById('read');

    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
    librarySection.innerHTML = '';
    displayLibrary(myLibrary);
  }

  // newBookButton.addEventListener('click', () => {
  //   if (addBookForm.style.height == 0) {
  //     addBookForm.style.height = 'fit-content';
  //   } else {
  //     addBookForm.style.height = 0;
  //   }
  // });

  const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkein', '295 pages', 'Not yet read');
  const atomicHabits = new Book('Atomic Habits', 'James Clear', '306 pages', 'Read');
  const howToWinFriends = new Book('How to Win Friends and Influence People', 'Dale Carnegie', '260 pages', 'In Progress');
  const thinkingFast = new Book('Thinking Fast and Slow', 'Daniel Kahneman', '499 pages', 'In progress');
  const saltFat = new Book('Salt Fat Acid Heat', 'Samin Nosrat', '622 pages', 'In progress');

  myLibrary.push(theHobbit, atomicHabits, howToWinFriends, thinkingFast, saltFat);
  displayLibrary(myLibrary);
});