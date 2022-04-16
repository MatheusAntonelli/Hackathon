import React from 'react'
import ProfileFooter from '../Components/Footer/ProfileFooter'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/Profile/Main'

function Profile() {
  return (
      <>
        <Navbar></Navbar>
        <Main/>
        <ProfileFooter></ProfileFooter>
      </>

  )
}

export default Profile