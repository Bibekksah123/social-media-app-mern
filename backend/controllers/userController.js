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
        message: "All fiels are empty",
        success: false,
      });
    }
    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: " user not exits",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: " incorrect email and password ",
        success: false,
      });
    }
    const token = await jwt.sign(
      { userid: user.id },
      process.env.secrect_code,
      { expiresIn: "7d" }
    );
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "7d", httpOnly: true })
      .json({
        message: `welcome to our app ${user.username}.`,
        success: true,
      });
  } catch (eror) {
    console.log(eror);
  }
};

export const logout_user = (req, res) => {
  return res
    .status(201)
    .cookie("token", "", { expiresIn: new Date(Date.now()) })
    .json({
      message: "logout successfully",
      success: true,
    });
};

export const bookmarks = async (req, res) => {
  try {
    const loginUseerId = req.body.id;
    const postId = req.params.id;
    const user = await userModels.findById(loginUseerId);
    if (!user) {
      return res.status(401).json({
        message: "user not exits",
      });
    }
    if (user.bookmarks.includes(postId)) {
      //remove
      await userModels.findByIdAndUpdate(loginUseerId, {
        $pull: { bookmarks: postId },
      });
      return res.status(201).json({
        message: "You remove bookmarks  userpost",
      });
    } else {
      //bookmarks
      await userModels.findByIdAndUpdate(loginUseerId, {
        $push: { bookmarks: postId },
      });
      return res.status(201).json({
        message: "You bookmarks userpost",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModels.findById(id).select("-password");
    return res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const otherProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUser = await userModels
      .find({ _id: { $ne: id } })
      .select("-password")
      .limit(8);
    if (!otherUser) {
      return res.status(401).json({
        message: "currently no user there.",
      });
    }
    return res.status(201).json({
      otherUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const followerOrFollowing = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userWeFollowId = req.params.id;
    const loggedInUser = await userModels.findById(loggedInUserId);
    const userWEFollow = await userModels.findById(userWeFollowId);
    if (userWEFollow.followers.includes(loggedInUserId)) {
      await userWEFollow.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { followings: userWeFollowId } });
      return res.status(201).json({
        message: `You unfollow ${userWEFollow.username}`,
      });
    } else {
      await userWEFollow.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { followings: userWeFollowId } });
      return res.status(201).json({
        message: `You just Now Follow ${userWEFollow.username}`,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
