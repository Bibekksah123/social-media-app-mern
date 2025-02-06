import React from "react";
import Setting from "./Setting";
function Leftsidebar() {
  return (
    <div>
      <div>
        <div className="flex items-center mt-1">
          <img
            className="w-20"
            src="https://static.vecteezy.com/system/resources/previews/000/623/220/original/love-heart-logo-and-symbol-vector.jpg"
            alt=""
          />
          <h1>VibeNest</h1>
        </div>
        <Setting />
      </div>
    </div>
  );
}

export default Leftsidebar;
