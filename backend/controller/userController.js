const User = require("../model/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req,res) => {
  try {
    // fetch data from request body
    
    const { email, password, confirmPassword, name } = req.body;

    // validate data
    if (!name || !email || !password || !confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check password and confirm password
    if (password != confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirm password do not match",
      });
    }

    // check password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "password must be at least 6 character long",
      });
    }

    // check user already exist or not

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // create user and save user data in database
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
    
    // return resposne
    return res.status(200).json({
      success: true,
      message: "User is registered successfully",
      user,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message : "Unable to singup please, try again",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // fetch user data from req.body
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check user exist or not

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email, please singup first",
      });
    }

    // compare password

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
      };

      // create token
      const token = jwt.sign(payload, "ramkumarsha256", { expiresIn: "2h" });

      // adding token to user data
      user.token = token;
      // remove password from user data
      user.password = undefined;

      // create cookie and send response
      const options = {
        httpOnly: true,
      };

      // return response 
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "password is incorrect",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to login, please try again",
    });
  }
};
