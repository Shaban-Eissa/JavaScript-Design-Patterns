// The shared Book object
class Book {
  constructor(title, author, isbn) {
    this.title = title; // shared
    this.author = author; // shared
    this.isbn = isbn; // shared
  }
}

// Store unique book instances
const booksMap = new Map(); // key = isbn, value = Book instance
const bookCopies = []; // stores all copies (sales, availability)

function createBook(title, author, isbn) {
  if (!booksMap.has(isbn)) {
    booksMap.set(isbn, new Book(title, author, isbn));
  }
  return booksMap.get(isbn);
}

function addBookCopy(title, author, isbn, availability, sales) {
  const book = createBook(title, author, isbn); // shared
  bookCopies.push({
    book, // reference to the shared book
    availability,
    sales,
  });
}

// Add copies
addBookCopy("Harry Potter", "JK Rowling", "AB123", true, 100);
addBookCopy("Harry Potter", "JK Rowling", "AB123", false, 50);
addBookCopy("The Great Gatsby", "F. Scott Fitzgerald", "EF567", true, 10);

console.log("Total copies:", bookCopies.length); // 3 copies
console.log("Unique books:", booksMap.size); // 2 books
