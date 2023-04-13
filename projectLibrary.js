let myLibrary = [];
function write(book, index) {
  let table = document.getElementById("myLibrary");
  let tableBody = table.getElementsByTagName("tbody")[0];

  let row = tableBody.insertRow();
  let indexCell = row.insertCell(0);
  let titleCell = row.insertCell(1);
  let authorCell = row.insertCell(2);
  let pagesCell = row.insertCell(3);
  let readCell = row.insertCell(4);

  indexCell.innerHTML = index;
  titleCell.innerHTML = book.title;
  authorCell.innerHTML = book.author;
  pagesCell.innerHTML = book.pages;
  readCell.innerHTML = book.read;
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
/* let firstBook = new Book("title", "author", 212, true); // addNewBook();
myLibrary.push(firstBook);
console.log(myLibrary); */
function visibility() {
  const myForm = document.getElementById("my-form");
  myForm.style.visibility = "visible";
}
function submitBook() {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  let book = new Book(title, author, Number(pages), read);
  myLibrary.push(book);
  write(book, myLibrary.length - 1);
  const myForm = document.getElementById("my-form");
  myForm.style.visibility = "hidden";
  console.log(title, author, pages, read);
  console.log(myLibrary);
}
const myForm = document.getElementById("my-form");
myForm.style.visibility = "hidden";
