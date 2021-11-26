const express = require("express");
const {
    setScore,change,
} = require("../controllers/scoreController");


const scoreRouter = express.Router();

scoreRouter.post("/setscore", setScore);
scoreRouter.post("/change", change);



module.exports = scoreRouter;
