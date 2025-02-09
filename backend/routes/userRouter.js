import express from 'express'
import {  bookmarks, followerOrFollowing, getProfile, login_user, logout_user, otherProfile, Register_user } from '../controllers/userController.js'
import { isAuthincated } from '../middleware/Auth.js';

export const userRouter=express.Router()

userRouter.post('/Register/socialmedia',Register_user)
userRouter.post("/login_user/socialmedia", login_user);
userRouter.get("/logout_user/socialmedia", logout_user);
userRouter.post("/bookmarks/:id",isAuthincated,bookmarks);
userRouter.get("/getprofile/:id", isAuthincated, getProfile);
userRouter.get("/otheruser/:id", isAuthincated,otherProfile);
userRouter.post("/followorfollowing/:id", isAuthincated, followerOrFollowing);







