# Books Management System:-

This project is a backend system for a library, allowing users to perform operations such as adding books, searching for books, borrowing and returning books, and managing user accounts. The system is built using Node.js, Express.js,javascript and MongoDB.

# Technologies Used:-

Node.js
Express.js
MongoDB

# Installation:-

Clone the repository:
git clone https://github.com/gourav9575/Book-Project-backendCode.git

# Install dependencies:-

cd books-management-system
npm install

# Set up environment variables:

Create a .env file in the root directory
Define the following variables:

JWT_SECRET="books-project-jwtsecret123",
PORT = 3000
user=gouravverma90455
DB_PASS="4xziWbqyPKlTjKB6"

# Run the application:

npm start

# API Endpoints

- Books:-
  POST /api/books: Add a new book to the library.
  GET /api/books: Retrieve a list of all available books.
  GET /api/books/:id: Retrieve a specific book by its ID.

- Users:-
  POST /api/users: Register a new user with username, email, and password.
  GET /api/users/:userId/books: Retrieve a list of books borrowed by a specific user.

- auth:-
  POST /api/auth/login: Login with an existing user.

- Borrowing and Returning Books:-
  POST /api/users/borrow/:bookId/:userId: Allow a user to borrow a book.
  POST /api/users/return/:bookId/:userId: Allow a user to return a book.

# Authentication:-

JSON Web Token (JWT) is used for authentication.
To register/login, use the /api/users and /api/users/login endpoints.
Include the generated JWT token in the auth-token header for authorized routes.

# Project Structure:-

- app.js: Entry point of the application.
- config: Configuration files (e.g., MongoDB connection, JWT secret).
- controllers: Contains controller functions for handling API requests.
- middleware: Custom middleware functions (e.g., authorization middleware).
- models: MongoDB data models (e.g., User, Book).
- routes: API route definitions.
- services: Business logic for application features (e.g., user registration, book management).

# Error Handling:-

Proper error handling and validation are implemented for API endpoints.
Errors are returned as JSON responses with appropriate status codes.

# Security:-

Input validation and sanitization are implemented to prevent common web vulnerabilities.
JWT is used for secure authentication.
