import React from "react";
import Leftsidebar from '../components/Leftsidebar'
import Feed from '../components/Feed'
import Rightsidebar from '../components/Rightsidebar'

function Home() {
  return (
    <div className="flex  justify-around my-10">
    <Leftsidebar/>
    <Feed/>
    <Rightsidebar/>
    </div>
  );
}

export default Home;
