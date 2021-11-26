const User = require("../../db/models/userSchema");

const setScore = async (req, res) => {
  try {
    User.findOneAndUpdate(
      { email: req.body.email },
      { $set: { score: req.body.score } },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }

        console.log(doc);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      error: true,
      message: "Cannot set up score",
    });
  }
};

const change = async (req, res) => {
  try {
    User.findOneAndUpdate(
      { email: req.body.email },
      { $set: { userName: req.body.username, password: req.body.password } },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        console.log(doc);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      error: true,
      message: "Cannot set up username, password",
    });
  }
};

module.exports = {
  setScore,
  change,
};
