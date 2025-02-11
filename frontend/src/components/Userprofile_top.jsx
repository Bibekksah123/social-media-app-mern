import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import useUserProfile from '../hooks/userProfile';

function Userprofile_top() {
  // const { User } = useSelector((state) => state.userdata); #fix/configure this sate
  // const id = User?._id; 

  const { data: userProfile , loading , error } = useUserProfile("");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex">
        <div className="flex items-center hover:bg-gray-200 rounded-full h-8">
          <Link to={"/VibeNest/home"}>
            <IoArrowBack size={25} className="cursor-pointer" />
          </Link>
        </div>
        <div className="ml-4">
          <h1 className="font-semibold text-xl">{userProfile?.name || "User"}</h1>
          <p className="font-medium text-gray-500 text-sm">{userProfile?.posts?.length || 0} Posts</p>
        </div>
      </div>

      <img
        src={userProfile?.coverImage || "https://wallpapercave.com/wp/wp9866071.jpg"}
        alt="background-image"
        className="w-[500px] h-[150px] rounded-2xl"
      />

      <div className="absolute top-48 ml-2 border-4 border-white rounded-full">
        <Avatar
          src={userProfile?.avatar || "https://th.bing.com/th/id/R.97e11166b3172885d1f0b413b2ddcad5?rik=N6mwfhd3AzLKIg&pid=ImgRaw&r=0"}
          size="110"
          round={true}
        />
      </div>

      <div className="text-right mt-2 ">
        <button className="px-8 py-1 hover:bg-gray-600 cursor-pointer border-none outline-none bg-gray-300 rounded-3xl">
          Edit
        </button>
      </div>

      <div className="mt-8 ml-8">
        <h1 className="font-bold text-gray-600 text-xl">{userProfile?.name || "User"}</h1>
        <p className="font-semibold text-sm text-gray-400">@{userProfile?.username || "username"}</p>
      </div>
    </div>
  );
}

export default Userprofile_top;
