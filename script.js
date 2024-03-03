document.addEventListener('DOMContentLoaded',function () {
  const myLibrary = [];
  const librarySection = document.querySelector('.library');

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
      const newCard = document.createElement('p');
      newCard.textContent = book;
      librarySection.appendChild(newCard);
    });
  }

  const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkein', '295 pages', 'Not yet read');
  const atomicHabits = new Book('Atomic Habits', 'James Clear', '306 pages', 'Read');
  const howToWinFriends = new Book('How to Win Friends and Influence People', 'Dale Carnegie', '260 pages', 'In Progress');

  myLibrary.push(theHobbit, atomicHabits, howToWinFriends);
  displayLibrary(myLibrary);
  console.log(myLibrary);
});