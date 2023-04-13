function Book(title, author, pages, readTheBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readTheBook = readTheBook;
  this.info = function () {
    return `${this.title} ${this.author},${this.pages} pages,${
      this.readTheBook ? "read" : "not read yet"
    }`;
  };
}

let book = new Book("The Hobbit", "by J.R.R Tolkien", 295, false);
console.log(book);
console.log(book.info());

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.madafaka = 123;
}

Student.prototype.sayName = function () {
  console.log(this.name);
};
Student.prototype.goToProm = function () {
  console.log("Eh.. go to prom?");
};
const student = new Student("Furkee", 10);
student.goToProm();

function Person(firstName, lastName) {
  // object constructor
  this.firstName = firstName;
  this.lastName = lastName;
}
// the prototype is another object that the original object inherits from, which is to say,
//the original object has access to all of its prototype’s methods and properties.
Person.prototype.fullName = function () {
  //prototype method
  return `${this.firstName} ${this.lastName}`;
};
const furkanPerson = new Person("Furkan", "Ipek");
const fullName = furkanPerson.fullName();
console.log(fullName);
//furkanPerson is called "an instance" of "Person" object
//new Person instantiates an object
