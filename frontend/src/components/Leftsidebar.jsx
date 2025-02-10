import React from "react";
import Setting from "./Setting";
import logo from '../assets/logo.png'
function Leftsidebar() {
  return (
    <div className="hidden md:block">
      <div>
        <div className="flex items-center mt-1">
          <img className="w-20" src={logo} alt="" />
          <h1>VibeNest</h1>
        </div>
        <Setting />
      </div>
    </div>
  );
}

export default Leftsidebar;
