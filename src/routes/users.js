const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", userController.registerUser);

// POST /api/borrow/:userId/:bookId (Borrow a Book for a User)
router.post("/borrow/:bookId/:userId", authMiddleware, userController.borrowBook);

// POST /api/return/:userId/:bookId (Return a Book for a User)
router.post("/return/:bookId/:userId", authMiddleware, userController.returnBook);

// GET /api/users/:userId/books (Get User's Borrowed Books)
router.get("/:userId/books", authMiddleware, userController.getUserborrowedBooks);

module.exports = router;
