import { postModels } from "../models/postSchema.js";

export const user_Post = async (req, res) => {
  try {
    const {description, id } = req.body;
    if ( !description || !id) {
      return res.status(401).json({
        message: "All field are required",
        success: false,
      });
    }
    await postModels.create({
      description,
      userid:id
    })

    return res.status(201).json({
      message: "successfully post created",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const delete_post=async(req,res)=>{
  try{
   await postModels.findByIdAndDelete({_id:req.params.id})
   res.status(201).json({
    message:"post have been deleted successfully",
    success:true
   })
  }catch(error){
    console.log(error)
  }
}

