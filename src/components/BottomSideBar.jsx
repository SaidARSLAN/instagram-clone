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
    <section className='w-full fixed bottom-0 z-10 bg-white border-t-2 border-gray-200'>
        <nav className='py-6 px-2 flex w-full justify-evenly items-center cursor-pointer    '>
            <NavLink to="/" className='relative group'><FontAwesomeIcon icon={faHome} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></NavLink>
            <NavLink to="/searchsection"><FontAwesomeIcon icon={faSearch} className='text-2xl hover:text-gray-500 duration-200' onClick={handleSearchBottom}></FontAwesomeIcon></NavLink>
            <a href="/reels"><FontAwesomeIcon icon={faPlay} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></a>
            <NavLink to="/createpost"><FontAwesomeIcon icon={faPlus} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></NavLink>
            <a href="/messages"><FontAwesomeIcon icon={faMessage} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></a>
            <img src={userone} className='w-[25px] h-[25px] rounded-full border-2 border-gray-400' />
        </nav>
    </section>
  )
}

export default BottomSideBar