import mongoose from'mongoose'

export const dataConnection=()=>{
  try{
  mongoose.connect(process.env.MONGODB_URL).then(()=>{
     console.log("data have been connected");
  }).catch((error)=>{
     console.log(error);
  })
   
 
}
  catch(eror){
    console.log(eror)
  }
}
