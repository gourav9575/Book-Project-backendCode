const express = require("express");
const bookController = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.post("/", bookController.addBook);

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBookById);

module.exports = router;
