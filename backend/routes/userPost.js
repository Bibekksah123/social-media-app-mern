import express from "express";
import {
  delete_post,
  likeOrDislike,
  user_Post,
} from "../controllers/userPost.js";
import { isAuthincated } from "../middleware/Auth.js";

export const userPostRoutes = express.Router();

userPostRoutes.post("/post/socialmedia", isAuthincated, user_Post);
userPostRoutes.delete("/delete/:id", isAuthincated, delete_post);
userPostRoutes.post("/likesOrDislikes/:id", isAuthincated, likeOrDislike);
