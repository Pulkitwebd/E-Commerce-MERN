const express = require("express");
const router = express.Router();
const authController = require("../controller/auth/authControllers");
const Joi = require("joi");
const auth = require("../middleware/auth.js");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(12).required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authController.postRegister
);

router.post("/login", validator.body(loginSchema), authController.postLogin);

router.get("/test", auth, (req, res) => {
  res.send("Request Passed");
});

module.exports = router;
