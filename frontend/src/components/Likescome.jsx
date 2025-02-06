import React from 'react'
import { FaRegCommentDots } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
function Likescome() {
  return (
    <div className="flex justify-around items-center cursor-pointer">
             <div className="flex items-center ">
               <FaRegCommentDots
                 size={"20px"}
                 className="hover:bg-blue-500 rounded-3xl"
               />
               <p className="ml-2">0</p>
             </div>
             <div className="flex items-center cursor-pointer">
               <LuHeart
                 size={"20px"}
                 className="hover:bg-red-600 rounded-3xl"
               />
               <p className="ml-2">0</p>
             </div>
             <div className="flex items-center cursor-pointer">
               <IoBookmarkOutline
                 size={"20px"}
                 className="hover:bg-yellow-300 rounded-3xl"
               />
               <p className="ml-2">0</p>
             </div>
           </div>
  )
}

export default Likescome