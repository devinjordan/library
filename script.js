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
  }

  function displayLibrary (books) {
    books.forEach((book, index) => {
      const newCard = createCardElement('div', 'card');
      
      const title = createCardElement('h3', 'title', book.title);
      const author = createCardElement('p', 'author', book.author);
      const pages = createCardElement('p', 'pages', book.pages + ' pages');
      const space = createCardElement('br');
      const readDiv = createCardElement('div', 'readDiv');
      const removeBook = createCardElement('button', 'removeBook', 'remove');
      const readLabel = createCardElement('label', 'readLabel', "Read?");
      const read = createCardElement('input', 'read');
      read.type = "checkbox";
      read.checked = book.read;

      readDiv.appendChild(removeBook);
      readDiv.appendChild(readLabel);
      readDiv.appendChild(read);

      newCard.appendChild(title);
      newCard.appendChild(author);
      newCard.appendChild(pages);
      newCard.appendChild(space);
      newCard.appendChild(readDiv);
      newCard.setAttribute('id', 'book' + index);

      removeBook.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        librarySection.innerHTML = '';
        displayLibrary(myLibrary);    
      });

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
    const newRead = document.getElementById('read').checked;

    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);

    // clear and refresh library with new card
    librarySection.innerHTML = '';
    displayLibrary(myLibrary);
    console.log(myLibrary);
    console.log(newRead);
    console.log(newBook);
  }

  // newBookButton.addEventListener('click', () => {
  //   if (addBookForm.style.height == 0) {
  //     addBookForm.style.height = 'fit-content';
  //   } else {
  //     addBookForm.style.height = 0;
  //   }
  // });

  const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkein', 295, false);
  const atomicHabits = new Book('Atomic Habits', 'James Clear', 306, true);
  const howToWinFriends = new Book('How to Win Friends and Influence People', 'Dale Carnegie', 260, false);
  const thinkingFast = new Book('Thinking Fast and Slow', 'Daniel Kahneman', 499, false);
  const saltFat = new Book('Salt Fat Acid Heat', 'Samin Nosrat', 622, false);

  myLibrary.push(theHobbit, atomicHabits, howToWinFriends, thinkingFast, saltFat);
  displayLibrary(myLibrary);
});