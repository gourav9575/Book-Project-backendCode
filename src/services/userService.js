const User = require("../models/user");
const Book = require("../models/book");
const bcrypt = require("bcryptjs");

const registerUserService = async (username, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email is already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });
  const savedUser = await newUser.save();
  return savedUser;
};

const borrowBookService = async (bookId, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.borrowedBooks.includes(bookId)) {
      throw new Error("Book already borrowed by the user");
    }
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    if (book.quantity <= 0) {
      throw new Error("Book is out of stock");
    }
    user.borrowedBooks.push(bookId);
    await user.save();
    book.quantity -= 1;
    await book.save();
    return { message: "Book borrowed successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const returnBookService = async (bookId, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (!user.borrowedBooks.includes(bookId)) {
      throw new Error("Book is not borrowed by the user");
    }
    // Remove the bookId from the user's borrowedBooks array
    user.borrowedBooks = user.borrowedBooks.filter((id) => id !== bookId);
    await user.save();
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    book.quantity += 1;
    await book.save();
    return { message: "Book returned successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserborrowedBooksService = async (userId) => {
  try {
    const user = await User.findById(userId).populate("borrowedBooks");
    if (!user) {
      throw new Error("User not found");
    }

    // Return the borrowedBooks array
    const borrowedBooks = user.borrowedBooks;
    return borrowedBooks;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  registerUserService,
  borrowBookService,
  returnBookService,
  getUserborrowedBooksService,
};
