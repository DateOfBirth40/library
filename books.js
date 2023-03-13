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
const formBackground = document.querySelector('.form-background')
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
  console.log(newBook);
  createBookCard(newBook);
  addBookToLibrary(newBook);
  return newBook;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  console.log(myLibrary);
//   return newBook;
};

function isReadChecked() {
  const isBookRead = isReadInput.checked;
  return isBookRead;
}

function createBookCard(newBook) {
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  card.classList.add('card');
  readBtn.classList.add('read-btn');
  readBtn.onclick = toggleRead;
  removeBtn.classList.add('remove-btn');
  removeBtn.onclick = removeBook;

  title.textContent = `"${newBook.title}"`;
  author.textContent = newBook.author;
  if (newBook.pages > 1) {
    pages.textContent = `${newBook.pages} pages`;
  } else {
    pages.textContent = `${newBook.pages} page`;
  }
  removeBtn.textContent = 'Remove';

  if (isReadInput.checked) {
    // Can maybe change the above to isReadInput.checked
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

function toggleRead() {
  const readBtn = document.querySelector('.read-btn');
  if (readBtn.textContent == 'Read') {
    readBtn.classList.remove('btn-light-green');
    readBtn.classList.add('btn-light-red');
    readBtn.textContent = 'Not read';
    // newBook.isReadInput = false;
  } else {
    readBtn.classList.remove('btn-light-red');
    readBtn.classList.add('btn-light-green');
    readBtn.textContent = 'Read';
    // newBook.isReadInput = true;
  }
}

function removeBook(e) {
//   const removeBtn = document.querySelector('.remove-btn');
  e.parentNode.remove();
}

function openForm() {
  bookForm.reset();
  document.querySelector('.form-div').style.display = 'block';
  formBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
//   backgroundDiv.appendChild(body);
//   backgroundDiv.style.backgroundColor = 'black|transparent';
}
function closeForm() {
  document.querySelector('.form-div').style.display = 'none';
  formBackground.style.backgroundColor = '';
}
window.onclick = function(event) {
  const modal = document.querySelector('.form-div');
  if (event.target == modal) {
    closeForm();
  }
};

// User Interface


// Form Data
const bookForm = document.querySelector('#book-form');
const submitForm = document.querySelector('#submit-form');

addBook.addEventListener('click', openForm);
submitForm.addEventListener('click', () => {
  closeForm();
  createBookObject(titleInput.value, authorInput.value,
      pagesInput.value, isReadInput.checked);
  addBookToLibrary(newBook);
//   createBookCard(newBook);
});

console.log(myLibrary);
