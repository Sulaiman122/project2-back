
const User = require("../../db/models/userSchema");


   const signup= async(req, res) => {
    try {
      let user = await User.findOne({
        email: req.body.email,
      });
      if (user) {
        return res.status(200).json({
          error: true,
          message: "Email "+req.body.email+" is already in use",
        });
      }
      user = new User(req.body);
      await user.save();
      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(200).json({
        error: true,
        message: "Cannot Sign up",
      });
    }
  };


const login = async(req, res) =>{
  console.log(req.body.email);
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(200).json({
        error: true,
        message: "Incorrect Email or Password 1",
      });
    }else if(user.email==req.body.email&&user.password==req.body.password){
      return res.status(200).json(user);
    }
    return res.status(200).json({
      error: true,
      message: "Incorrect Email or Password 2",
    });
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      error: true,
      message: "Cannot Sign In",
    });
  }
};


module.exports = {
  signup,
  login,
};
