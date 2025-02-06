import React from "react";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";

function Feed() {
  return (
    <div className="w-[30%]">
      <div>
        <CreatePost />
        <PostItem />
      </div>
    </div>
  );
}

export default Feed;
