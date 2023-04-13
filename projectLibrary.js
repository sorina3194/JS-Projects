let myLibrary = [];
function write() {
  let table = document.getElementById("myLibrary");
  let tableBody = table.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let row = tableBody.insertRow();
    let indexCell = row.insertCell(0);
    let titleCell = row.insertCell(1);
    let authorCell = row.insertCell(2);
    let pagesCell = row.insertCell(3);
    let readCell = row.insertCell(4);
    let buttonCell = row.insertCell(5);

    indexCell.innerHTML = i;
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;
    const button = document.createElement("button"); // Create a new button element
    button.innerText = "Click Me"; // Set the text of the button
    button.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      write();
    });
    buttonCell.appendChild(button);
    const read = document.createElement("button");
    read.innerText = "Read"; // Set the text of the button
    read.addEventListener("click", function () {
      myLibrary[i].read = true;
      console.log("✓");
      write();
    });
    readCell.appendChild(read); // A // Add the button to the container
  }
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
  let book = new Book(title, author, Number(pages), false);
  myLibrary.push(book);
  write();
  const myForm = document.getElementById("my-form");
  myForm.style.visibility = "hidden";
  console.log(title, author, pages);
  console.log(myLibrary);
}
const myForm = document.getElementById("my-form");
myForm.style.visibility = "hidden";

document.getElementById("my-books").addEventListener("click", function () {
  console.log(myLibrary);
});
