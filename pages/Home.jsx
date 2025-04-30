import React from 'react'
import SideNavbar from '../components/SideNavbar'
import HomePage from '../components/HomePage'
const Home = ({aSideNavbar}) => {
  return (
    <>
      <div className="flex w-full  pb-0 ">
        <div className=""><SideNavbar aSideNavbar={aSideNavbar} /></div>
       <div className='w-[100vw] h-screen bg-black  ' > <HomePage aSideNavbar={aSideNavbar} /></div>
      </div>
    </>
  )
}

export default Home
