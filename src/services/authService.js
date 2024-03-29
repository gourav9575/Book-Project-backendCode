const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const User = require("../models/user");

const loginUserService = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials, User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials, Incorrect password");
    }
    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: "1h" });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  loginUserService,
};
