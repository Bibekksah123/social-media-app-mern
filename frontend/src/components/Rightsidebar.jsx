import React from "react";
import { CiSearch } from "react-icons/ci";
import Profilesee from "./Profilesee";
function Rightsidebar() {
  return (
    <div className=" p-5 rounded-3xl hidden md:block">
      <div className="flex items-center px-4 py-2 rounded-full bg-gray-200 outline-none">
        <CiSearch className="mr-1" size={"20"} />
        <input
          type="text"
          placeholder="Search and Explore"
          className="outline-none text-gray-500"
        />
      </div>
      <div className="p-4">
        <h1 className="text-center py-1 text-gray-500 rounded-4xl font-bold bg-gray-100">
          Who to follow
        </h1>
        <div>
          <Profilesee/>
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;
