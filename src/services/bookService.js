const Book = require("../models/book");
const User = require("../models/user");

const addBookService = async (title, author, isbn, quantity) => {
  try {
    const newBook = new Book({
      title,
      author,
      isbn,
      quantity,
      createdAt: new Date(),
    });

    const savedBook = await newBook.save();
    return savedBook;
  } catch (error) {
    throw new Error("Failed to add book");
  }
};

const getAllBooksService = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    throw new Error("Failed to get all books");
  }
};

const getBookByIdService = async (id) => {
  try {
    const book = await Book.findById(id);
    return book;
  } catch (error) {
    throw new Error("Failed to get book by ID");
  }
};

module.exports = {
  addBookService,
  getAllBooksService,
  getBookByIdService,
};
