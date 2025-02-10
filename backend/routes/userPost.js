import express from "express";
import {
  delete_post,
  likeOrDislike,
  user_Post,
} from "../controllers/userPost.js";
import { isAuthincated } from "../middleware/Auth.js";
import { getFollowingPost, getPostOurAndFollower } from "../controllers/userFollowpost.js";

export const userPostRoutes = express.Router();

userPostRoutes.post("/post/socialmedia", isAuthincated, user_Post);
userPostRoutes.delete("/delete/:id", isAuthincated, delete_post);
userPostRoutes.post("/likesOrDislikes/:id", isAuthincated, likeOrDislike);
userPostRoutes.get("/userFollowPost/:id", isAuthincated, getPostOurAndFollower);
userPostRoutes.get("/userFollowingPost/:id", isAuthincated, getFollowingPost);


