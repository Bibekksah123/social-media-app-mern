import React from 'react'
import Avatar from 'react-avatar';

function Profilesee() {
  return (
    <div className="flex mt-4 items-center">
      <div>
        <Avatar
          src="https://th.bing.com/th/id/R.ecbe466f564a4a5d53599d106741e017?rik=h7Q0EqZBc0Khqw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f2%2f2%2f180440.jpg&ehk=XrAkNuf%2f9qL9mnkukEHU0bh%2b8ORG6A7Ezot73JaCaEo%3d&risl=&pid=ImgRaw&r=0"
          size="40"
          round={true}
        />
      </div>
      <div className="flex items-center ml-2 ">
        <h1 className="font-semibold">Arav</h1>
        <p className="text-sm">@arav123</p>
      </div>
      <button className="bg-gray-600 px-10 py-1 rounded-full text-white flex items-center ml-4 my-3 cursor-pointer">
        Follow
      </button>
    </div>
  );
}

export default Profilesee