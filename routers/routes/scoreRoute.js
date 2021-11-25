const express = require("express");
const {
    setScore,
} = require("../controllers/scoreController");


const scoreRouter = express.Router();

scoreRouter.post("/setscore", setScore);



module.exports = scoreRouter;
