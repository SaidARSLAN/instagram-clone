import { faCircle, faHome, faMessage, faPlay, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { userone } from '../contents'

const BottomSideBar = () => {
  return (
    <section className='fixed bottom-0 w-full bg-white z-10 border-t-2 border-gray-200'>
        <nav className='py-6 px-2 flex w-full justify-evenly items-center cursor-pointer    '>
            <a href="/" className='relative group'><FontAwesomeIcon icon={faHome} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></a>
            <a href="/"><FontAwesomeIcon icon={faSearch} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></a>
            <a href="/"><FontAwesomeIcon icon={faPlay} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></a>
            <a href="/"><FontAwesomeIcon icon={faPlus} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></a>
            <a href="/"><FontAwesomeIcon icon={faMessage} className='text-2xl hover:text-gray-500 duration-200'></FontAwesomeIcon></a>
            <img src={userone} className='w-[25px] h-[25px] rounded-full border-2 border-gray-400' />
        </nav>
    </section>
  )
}

export default BottomSideBar