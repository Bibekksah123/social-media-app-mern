import bcrypt from "bcrypt";
import { userModels } from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const Register_user = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(401).json({
        message: "All fiels are empty",
        success: false,
      });
    }
    const user = await userModels.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "Already user exits",
        success: false,
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    await userModels.create({
      username,
      email,
      password: hashpassword,
    });
    return res.status(201).json({
      message: "successfully create account",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are empty",
        success: false,
      });
    }

    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "user not exists",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "incorrect email and password",
        success: false,
      });
    }

    const token = await jwt.sign(
      { userid: user.id },
      process.env.secrect_code,
      { expiresIn: "7d" }
    );

    const cookieOptions = {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      path: '/',
    };

    console.log(token)

    return res
      .status(201)
      .cookie("token", token, cookieOptions)
      .json({
        message: `welcome to our app ${user.username}`,
        success: true,
        user,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const logout_user = (req, res) => {
  const cookieOptions = {
    expires: new Date(Date.now()),
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  };

  return res
    .status(200)
    .cookie("token", "", cookieOptions)
    .json({
      message: "logout successfully",
      success: true,
    });
};


