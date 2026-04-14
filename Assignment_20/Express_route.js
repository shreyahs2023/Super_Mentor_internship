const express = require("express");
const app = express();

const books = [
  { id: 1, title: "Book One", authorId: 1 },
  { id: 2, title: "Book Two", authorId: 2 }
];

const authors = [
  { id: 1, name: "Author One" },
  { id: 2, name: "Author Two" }
];

// Route: Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Route: Get single book
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  res.json(book || { message: "Book not found" });
});

// Route: Get all authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

// Route: Get single author
app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  res.json(author || { message: "Author not found" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});