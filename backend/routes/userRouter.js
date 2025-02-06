import express from 'express'
import {  login_user, logout_user, Register_user } from '../controllers/userController.js'

export const userRouter=express.Router()

userRouter.post('/Register/socialmedia',Register_user)
userRouter.post("/login_user/socialmedia", login_user);
userRouter.get("/logout_user/socialmedia", logout_user);

