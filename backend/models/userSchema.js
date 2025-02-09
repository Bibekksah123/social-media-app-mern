import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
        default: [],
      },
    ],
    followings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
        default: [],
      },
    ],
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export const userModels = mongoose.model("userData", userSchema);
