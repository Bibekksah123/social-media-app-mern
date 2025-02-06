import React from 'react'
import Leftsidebar from '../components/Leftsidebar'
import Rightsidebar from '../components/Rightsidebar'
import UserProfile from '../components/UserProfile'
function Profile() {
  return (
    <div className='flex justify-between m-10'>
      <Leftsidebar/>
      <UserProfile/>
      <Rightsidebar/>
    </div>
  )
}

export default Profile