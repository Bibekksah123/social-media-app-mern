import express from "express";
import { delete_post, user_Post } from "../controllers/userPost.js";
import { isAuthincated } from "../middleware/Auth.js";

export const userPostRoutes = express.Router();

userPostRoutes.post("/post/socialmedia", isAuthincated, user_Post);
userPostRoutes.delete("/delete/:id",  delete_post);
