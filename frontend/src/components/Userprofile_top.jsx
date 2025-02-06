import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
function Userprofile_top() {
  return (
    <div>
              <div className="flex">
                <div className=" flex items-center hover:bg-gray-200 rounded-full h-8">
                  <Link to={"/VibeNest/home"}>
                    {" "}
                    <IoArrowBack size={25} className="cursor-pointer" />
                  </Link>
                </div>
                <div className="ml-4">
                  <h1 className="font-semibold text-xl">Bibek</h1>
                  <p className="font-medium text-gray-500 text-sm">16Post</p>
                </div>
              </div>
              <img
                src="https://wallpapercave.com/wp/wp9866071.jpg"
                alt="background-image"
                className="w-[500px] h-[150px] rounded-2xl"
              />
              <div className="absolute top-48 ml-2 border-4 border-white rounded-full">
                <Avatar
                  src="https://th.bing.com/th/id/R.97e11166b3172885d1f0b413b2ddcad5?rik=N6mwfhd3AzLKIg&pid=ImgRaw&r=0"
                  size="110"
                  round={true}
                />
              </div>
              <div className="text-right mt-2 ">
                <button className="px-8 py-1  hover:bg-gray-600 cursor-pointer border-none outline-none bg-gray-300 rounded-3xl">
                  Edit
                </button>
              </div>
              <div className="mt-8 ml-8">
                <h1 className="font-bold text-gray-600 text-xl">Bibek</h1>
                <p className="font-semibold text-sm text-gray-400">@bibeksah</p>
              </div>
    </div>
  )
}

export default Userprofile_top