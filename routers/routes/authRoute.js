const express = require("express");
const {
  signup,
  login,
} = require("../controllers/authController");


const authRouter = express.Router();

authRouter.post("/register", signup);
authRouter.get('/login', login);



module.exports = authRouter;
