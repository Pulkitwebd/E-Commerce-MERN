const jwt = require("jsonwebtoken");
const User = require("../../userSchema/userSchema.js");
const bcrypt = require("bcryptjs");

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).send("Email already exist");
    }

    //encrypt password
    const encryptPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptPassword,
    });

    user.generateAuthToken();

    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = postRegister;
