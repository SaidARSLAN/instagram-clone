import { faHome, faMessage, faPlay, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { userone } from '../contents'
import { NavLink } from 'react-router-dom'

const BottomSideBar = () => {

  const handleSearchBottom = () => {
    const searchInput = document.getElementById("dontpush")
    searchInput.focus();
  }


  return (
    <section className='w-full fixed bottom-0 z-10 bg-white border-t-2 border-gray-200 lg:w-1/5 lg:h-screen lg:border-r-[2px]'>
        <nav className='py-6 px-2 flex w-full justify-evenly items-center cursor-pointer lg:flex-col lg:mt-4 lg:items-start lg:mx-4 lg:space-y-12'>
        <h1 className="hidden lg:flex font-danceScirpt text-2xl">
              INSTAGRAM
          </h1>
            <NavLink to="/" className='relative group'><FontAwesomeIcon icon={faHome} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon><span className='pl-4 font-bold text-lg hidden lg:inline-block'>Home</span></NavLink>
            <NavLink to="/searchsection"><FontAwesomeIcon icon={faSearch} className='text-2xl hover:text-gray-500 duration-200' onClick={handleSearchBottom}></FontAwesomeIcon><span className='pl-4 text-lg hidden lg:inline-block'>Search</span></NavLink>
            <a href="/reels"><FontAwesomeIcon icon={faPlay} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon><span className='pl-4 text-lg hidden lg:inline-block'>Reels</span></a>
            <NavLink to="/createpost"><FontAwesomeIcon icon={faPlus} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon><span className='pl-4 text-lg hidden lg:inline-block'>Create</span></NavLink>
            <a href="/messages"><FontAwesomeIcon icon={faMessage} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon><span className='pl-4 text-lg hidden lg:inline-block'>Messages</span></a>
            <NavLink to="/myprofile"><img src={userone} className='w-[25px] h-[25px] rounded-full border-2 border-gray-400 relative'/><span className='pl-4  text-lg hidden lg:inline-block absolute bottom-[185px] left-12'>Profile</span></NavLink>
            <div className='hidden lg:flex absolute bottom-8 w-full space-x-4 items-center'>
            <div className='flex flex-col gap-1'>
              <div className='w-[25px] h-[3px] bg-gray-700'></div>
              <div className='w-[25px] h-[3px] bg-gray-700'></div>
              <div className='w-[25px] h-[3px] bg-gray-700'></div>
            </div>
            <p className='text-lg'>More</p>
            </div>
        </nav>
    </section>
  )
}

export default BottomSideBar