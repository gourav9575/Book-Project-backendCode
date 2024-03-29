const userService = require("../services/userService");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await userService.registerUserService(username, email, password);
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserborrowedBooks = async (req, res) => {
  const { userId } = req.params;
  try {
    const borrowedBooks = await userService.getUserborrowedBooksService(userId);
    res.status(200).json(borrowedBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const borrowBook = async (req, res) => {
  const { bookId, userId } = req.params;
  try {
    const result = await userService.borrowBookService(bookId, userId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const returnBook = async (req, res) => {
  const { bookId, userId } = req.params;

  try {
    const result = await userService.returnBookService(bookId, userId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  borrowBook,
  returnBook,
  getUserborrowedBooks,
  registerUser,
};
