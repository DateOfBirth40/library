/* eslint-disable require-jsdoc */

// Find a way to use the DOM to add .card divs when running addBookToLibrary
// 

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

function addBookToLibrary(book) {
  book.title = prompt('What is the title of the book?');
  book.author = prompt('Who is the author of the book?');
  book.pages = prompt('How many pages are in the book?');
  book.read = prompt('Did you finish the book?');
  if (book.read === yes) {
    book.read = true;
  } else {
    book.read = false;
  }
  myLibrary.push(book);
  // Figure out what needs to go in here so that the input gets added to array
}

addBookToLibrary.prototype = Object.create(Book.prototype);

addBookToLibrary();

const ballsBook = new Book('balls', 'Derek', '500', true);

console.log(ballsBook.info());
console.log(myLibrary);


