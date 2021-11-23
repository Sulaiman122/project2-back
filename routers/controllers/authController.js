
const User = require("../../db/models/userSchema");


   const signup= async(req, res) => {
    try {
      let user = await User.findOne({
        username: req.body.userName,
        email: req.body.email,
      });
      if (user) {
        return res.status(400).json({
          error: true,
          message: "Username or email is already in use",
        });
      }
      user = new User(req.body);
      await user.save();
      return res.status(201).send(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: true,
        message: "Cannot Sign up",
      });
    }
  };


const login = (req, res) =>{
    userModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
};




  // let alreadyUsedEmail = users.find((item) => item.email == req.body.email);
  // if (!alreadyUsedEmail) {
  //   users.push({
  //     id: Date.now().toString(),
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password,
  //     todos: []
  //   });
  //   fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
  //     if (err) {
  //       console.log(err);
  //       return err;
  //     } else {
  //       console.log("wrote in json");
  //     }
  //   });
  //   res.status(200).json({ status: true, name: req.body.name });
  // } else {
  //   res.status(200).json({ status: false, errMessage: "Email is taken" });
  // }



// const login = (req, res) => {
//   fs.readFile("./db/users.json", (err, data) => {
//     if (err) {
//       console.log(err);
//       return err;
//     } else {
//       users = JSON.parse(data);
//     }
//   });
//   let valid = users.find((item) => {
//     return req.body.email == item.email && req.body.password == item.password;
//   });

//   if (valid) {
//     res.status(200).json({ status: true });
//   } else {
//     res
//       .status(200)
//       .json({ status: false, errMessage: "Incorrect Email or Password" });
//     console.log(false);
//   }
// };

module.exports = {
  signup,
  login,
};
