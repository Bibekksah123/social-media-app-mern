import React from 'react'
import { IoIosHome } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRectangleList } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Setting() {
  return (
    <div className="my-4">
      <div
        className="flex items-center gap-5 my-2 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <IoIosHome size={"24px"} />
        <Link to={"/VibeNest/home"}>
          <h1 className="text-xl">Home</h1>
        </Link>
      </div>
      <div
        className="flex items-center my-2 gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <IoMdSearch size={"24px"} />

        <h1 className="text-xl">Explore</h1>
      </div>
      <div
        className="flex items-center my-2 gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <IoNotificationsOffOutline size={"24px"} />

        <h1 className="text-xl">Notification</h1>
      </div>
      <div
        className="flex items-center my-2 gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <FaRegUser size={"24px"} />

        <Link to={"/VibeNest/home/profile"}>
          <h1 className="text-xl">Profile</h1>
        </Link>
      </div>
      <div
        className="flex items-center my-2 gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <IoIosHeartEmpty size={"24px"} style={{ color: "red" }} />

        <h1 className="text-xl">Premimun</h1>
      </div>
      <div
        className="flex items-center my-2 gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <CgMoreO size={"24px"} />

        <h1 className="text-xl">Message</h1>
      </div>
      <div
        className="flex items-center  gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <FaRectangleList size={"24px"} />

        <h1 className="text-xl">List</h1>
      </div>
      <div
        className="flex items-center my-2 gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <CgMoreO size={"24px"} />

        <h1 className="text-xl">More</h1>
      </div>
      <div
        className="flex items-center gap-5 hover:bg-gray-300 cursor-pointer
     rounded-full px-2"
      >
        <LuLogOut size={"24px"} />

        <h1 className="text-xl">Logout</h1>
      </div>
      <button className="bg-gray-600 px-10 py-1 rounded-full text-white flex items-center ml-4 my-3 cursor-pointer">
        Post
      </button>
    </div>
  );
}

export default Setting