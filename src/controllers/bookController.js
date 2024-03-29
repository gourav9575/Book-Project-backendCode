const bookService = require("../services/bookService");

const addBook = async (req, res) => {
  try {
    const { title, author, isbn, quantity } = req.body;
    const newBook = await bookService.addBookService(title, author, isbn, quantity);
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooksService();
    res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookByIdService(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
};
