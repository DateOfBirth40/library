/* eslint-disable require-jsdoc */

// Find a way to use the DOM to add .card divs when running addBookToLibrary

const myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Global Variables
const container = document.querySelector('.container');
const addBook = document.querySelector('#add-book');
const formDiv = document.querySelector('.form-div');
const body = document.querySelector('.body');
const backgroundDiv = document.createElement('div');
backgroundDiv.setAttribute('id', 'background');

// Input Variables
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const isReadInput = document.querySelector('#read');

// Functions
function createBookObject(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  return newBook;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  return newBook;
};

function isReadChecked() {
  const isRead = isReadInput.checked;
  return isRead;
}

console.log(isReadInput.checked);
console.log(isReadChecked());

function createBookCard(newBook) {
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

// User Interface


// Form Data
const bookForm = document.querySelector('#book-form');
const submitForm = document.querySelector('#submit-form');

// bookForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   getData(e.target);
// });

addBook.addEventListener('click', openForm);
submitForm.addEventListener('click', () => {
  closeForm();
  addBookToLibrary(
      createBookObject(titleInput.value, authorInput.value,
          pagesInput.value, isReadInput.checked));
  createBookCard(newBook);
});

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

// console.log(newBook);
