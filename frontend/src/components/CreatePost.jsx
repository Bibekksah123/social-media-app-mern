import React from "react";
import Avatar from "react-avatar";
import { FaImage } from "react-icons/fa6";


function CreatePost() {
  return (
    <div>
      <div className="mt-5">
        <div className="flex items-center justify-between border-b border-b-gray-300 ">
          <div>
            <h1 className="font-semibold text-gray-600 cursor-pointer">
              For You
            </h1>
          </div>
          <div>
            <h1 className="font-serif text-gray-800 cursor-pointer">
              Following
            </h1>
          </div>
        </div>
      </div>
      <div className="m-4">
        <div className="flex items-center">
          <div>
            <Avatar
              src="https://th.bing.com/th/id/R.97e11166b3172885d1f0b413b2ddcad5?rik=N6mwfhd3AzLKIg&pid=ImgRaw&r=0"
              size="40"
              round={true}
            />
          </div>
          <input
            className="w-full boder-none outline-none ml-5 text-xl h-10 rounded-xl"
            type="text"
            placeholder="What is happenning?!"
          />
        </div>
        <div className="flex items-center justify-between mt-5 border-b border-b-gray-200 cursor-pointer">
          <div>
            <FaImage size={"20px"}  />
          </div>
          <button className="bg-gray-600 px-10 py-1 rounded-full text-white flex items-center ml-4 my-3 cursor-pointer">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
