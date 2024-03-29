const express = require("express");
const connectDB = require("./src/database/db");
const config = require("./config/config");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();

app.use("/api/books", require("./src/routes/books"));
app.use("/api/users", require("./src/routes/users"));
app.use("/api/auth", require("./src/routes/auth"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
