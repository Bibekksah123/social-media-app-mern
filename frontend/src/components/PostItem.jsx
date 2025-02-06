import React from 'react'
import Avatar from 'react-avatar';
import Likescome from './Likescome';


function PostItem() {
  return (
    <div className='border-b border-gray-200'>
      <div>
        <div className="flex gap-1.5 p-4">
          <Avatar
            src="https://th.bing.com/th/id/R.97e11166b3172885d1f0b413b2ddcad5?rik=N6mwfhd3AzLKIg&pid=ImgRaw&r=0"
            size="40"
            round={true}
          />
          <div>
            <div className="flex items-center mb-2">
              <h1 className="font-bold text-gray-600 text-xl">Bibek</h1>
              <p className="font-semibold text-sm text-gray-400">
                @bibeksah .1m
              </p>
            </div>
            <p>Hello developer today we, building a scial media app</p>
          </div>
        </div>
       <Likescome/>
      </div>
    </div>
  );
}

export default PostItem