import { userModels } from "../models/userSchema.js";

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