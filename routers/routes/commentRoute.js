const express = require("express");
const {
    addComment,RetrieveComment,
} = require("../controllers/commentController");


const commentRouter = express.Router();

commentRouter.post("/comment", addComment);
commentRouter.post("/retrievecomment", RetrieveComment);



module.exports = commentRouter;
