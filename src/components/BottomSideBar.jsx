import { faCircle, faHome, faMessage, faPlay, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BottomSideBar = () => {
  return (
    <section className='fixed bottom-0 w-full bg-white z-10'>
        <nav className='py-6 px-2 flex w-full justify-evenly items-center cursor-pointer    '>
            <FontAwesomeIcon icon={faHome} className='text-2xl hover:text-3xl duration-200'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faSearch} className='text-2xl hover:text-3xl duration-200'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPlay} className='text-2xl hover:text-3xl duration-200'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPlus} className='text-2xl hover:text-3xl duration-200'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faMessage} className='text-2xl hover:text-3xl duration-200'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircle} ></FontAwesomeIcon>
        </nav>
    </section>
  )
}

export default BottomSideBar