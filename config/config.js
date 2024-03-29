const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mongoURI: `mongodb+srv://gouravverma90455:${process.env.DB_PASS}@books-db.yjtklib.mongodb.net/`,
  jwtSecret: process.env.JWT_SECRET,
};
