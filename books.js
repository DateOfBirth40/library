/* eslint-disable require-jsdoc */

// Find a way to use the DOM to add .card divs when running addBookToLibrary

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = null;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

addBookToLibrary = function() {
  title = prompt('What is the title of the book?');
  author = prompt('Who is the author of the book?');
  pages = prompt('How many pages are in the book?');
  read = prompt('Did you finish the book?');
  //   if (this.read === yes) {
  //     this.read = true;
  //   } else {
  //     this.read = false;
  //   }
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
  // Figure out what needs to go in here so that the input gets added to array
};

function NewBook() {

}

NewBook.prototype = Object.create(Book.prototype);

NewBook();

const myBook = new Book('book', 'Derek', '500', true);

console.log(myBook.info());
console.log(myLibrary);

// User Interface
const container = document.querySelector('.container');
const addBook = document.querySelector('#add-book');

addBook.addEventListener('click', addBookToLibrary);

const createBookCard = (newBook) => {
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  card.classList.add('card');
//   readBtn.onclick = toggleRead;
//   removeBtn.onclick = removeBook;

  title.textContent = `"${newBook.title}"`;
  author.textContent = newBook.author;
  pages.textContent = `${newBook.pages} pages`;
  removeBtn.textContent = 'Remove';

  if (newBook.isRead) {
    readBtn.textContent = 'Read';
    readBtn.classList.add('btn-light-green');
  } else {
    readBtn.textContent = 'Not read';
    readBtn.classList.add('btn-light-red');
  }

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readBtn);
  card.appendChild(removeBtn);
  container.appendChild(card);
};
