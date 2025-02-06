import express from "express";
import dotenv from "dotenv";
import { dataConnection } from "./confi/database.js";
import { userRouter } from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import { userPostRoutes } from "./routes/userPost.js";

dotenv.config();
const app = express();
dataConnection();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//api
app.use("/user/v1/api", userRouter);
app.use('/post/v1/api',userPostRoutes)

const Port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("home");
});

app.listen(Port, () => {
  console.log(`server has been started at:${Port}`);
});
