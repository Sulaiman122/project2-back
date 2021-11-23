const express = require("express");
const {
    gettodo,
} = require("../controllers/todoController");


const todoRouter = express.Router();

todoRouter.post("/todo", gettodo);



module.exports = todoRouter;
