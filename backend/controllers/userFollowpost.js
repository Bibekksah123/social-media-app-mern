import { postModels } from "../models/postSchema.js";
import { userModels } from "../models/userSchema.js";

export const getPostOurAndFollower=async(req,res)=>{
  try {
    const id=req.params.id;
    const loggedInUser=await userModels.findById(id)
    const loggedInUserPost=await postModels.find({userid:id})
    const followingUserPost=await Promise.all(loggedInUser.followings.map((otherUserPost=>{
      return  postModels.find({userid:otherUserPost})
    })))
    return res.status(201).json({
      Post:loggedInUserPost.concat(...followingUserPost)
    })
    
  } catch (error) {
    console.log(error)
  }

}

export const getFollowingPost=async(req,res)=>{
    try {
      const id = req.params.id;
      const loggedInUser = await userModels.findById(id);
      const followingUserPost = await Promise.all(
        loggedInUser.followings.map((otherUserPost) => {
          return postModels.find({ userid: otherUserPost });
        })
      );
      return res.status(201).json({
        Post:[].concat(...followingUserPost),
      });
    } catch (error) {
      console.log(error);
    }
  
}