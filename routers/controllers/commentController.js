const Comments = require("../../db/models/commentSchema");

const addComment = async (req, res) => {
  try {
    let comment = new Comments(req.body);
    await comment.save();
    console.log(req.body);
    return res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      error: true,
      message: "Cannot add comment",
    });
  }
};
const RetrieveComment = async (req, res) => {
  Comments.find({
    $and: [{ game: req.body.game }],
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  addComment,
  RetrieveComment,
};
