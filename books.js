/* eslint-disable require-jsdoc */

// Find a way to use the DOM to add .card divs when running addBookToLibrary

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

addBookToLibrary = function() {
  openForm();
    // title = prompt('What is the title of the book?');
    // author = prompt('Who is the author of the book?');
    // pages = prompt('How many pages are in the book?');
    // read = prompt('Did you finish the book?');
  const newBook = new Book(title, author, pages, true);
  myLibrary.push(newBook);
  createBookCard(newBook);
  // Figure out what needs to go in here so that the input gets added to array
};

const myBook = new Book('book', 'Derek', '500', true);

console.log(myBook.info());
console.log(myLibrary);

// User Interface
const container = document.querySelector('.container');
const addBook = document.querySelector('#add-book');
const submitForm = document.querySelector('#submit-form');
const formDiv = document.querySelector('.form-div');
const body = document.querySelector('.body');
const backgroundDiv = document.createElement('div');
backgroundDiv.setAttribute('id', 'background');

// Form Data
const bookForm = document.querySelector('#book-form');
// bookForm.addEventListener('submit', callbackFunction);

// function callbackFunction(event) {
//   event.preventDefault();
//   const myFormData = new FormData(event.target);
//   const formDataObj = Book.fromEntries(myFormData.entries());
//   console.log(formDataObj);
// }

const formData = new FormData(bookForm);
console.log(formData);

addBook.addEventListener('click', addBookToLibrary);
submitForm.addEventListener('click', closeForm);

function openForm() {
  document.querySelector('.form-div').style.display = 'block';
//   backgroundDiv.appendChild(body);
//   backgroundDiv.style.backgroundColor = 'black|transparent';
}
function closeForm() {
  document.querySelector('.form-div').style.display = 'none';
}
window.onclick = function(event) {
  const modal = document.querySelector('.form-div');
  if (event.target == modal) {
    closeForm();
  }
};

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

  if (newBook.read) {
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
