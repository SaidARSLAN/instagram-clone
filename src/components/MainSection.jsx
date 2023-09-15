import React from 'react'
import { photone, phototwo, userone, usertwo } from '../contents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faPaperPlane, faTransgender } from '@fortawesome/free-solid-svg-icons'
const MainSection = () => {
  return (
    <section className='w-full absolute top-[100px] px-3 flex flex-col'>
        {/* User ONE */}
        <div className='flex flex-col mb-16'>
          <div className='flex justify-between'>
            <div className='flex space-x-2'>
            <img src={userone} className='w-10 h-10 rounded-full border-2 p-1 border-gray-300'/>
            <p className='text-sm flex items-center justify-center'>saidrslnq</p>
            <li className='mt-2'></li>
            <p className='flex items-center justify-center text-gray-400'>1g</p>
            </div>
            <div className='flex space-x-[2px] items-center justify-center'>
                <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
                <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
                <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
            </div>
          </div>
          <div className='w-full flex-col space-y-4'>
          <img src={photone} className='mt-4 object-contain' alt="" />
              <div className='w-full flex justify-between px-4'>
              <h3 className='text-blue-500 tracking-wide'><a>See Statistics</a></h3>
              <button className='bg-blue-500 text-white px-12 py-1 rounded-lg hover:bg-blue-800 duration-200'>Boost Post</button>
              </div>
          </div>
          <div className='flex mt-2 px-2 space-x-4'>
            <FontAwesomeIcon icon={faHeart} className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faComment}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPaperPlane}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
          </div>
          <div className='mt-2 px-2'>
            <strong><p>saidrslnq</p></strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reprehenderit impedit molestias temporibus illum facere, id praesentium vel inventore similique vero officia sapiente aut omnis cupiditate necessitatibus laboriosam, modi enim!</p>
          </div>
          <div>
            <input placeholder='add comments'></input>
          </div>
        </div>
        <div className='flex flex-col mb-20'>
          <div className='flex justify-between'>
            <div className='flex space-x-2'>
            <img src={usertwo} className='w-10 h-10 rounded-full border-2 p-1 border-gray-300'/>
            <p className='text-sm flex items-center justify-center'>merani009</p>
            <li className='mt-2'></li>
            <p className='flex items-center justify-center text-gray-400'>1g</p>
            </div>
            <div className='flex space-x-[2px] items-center justify-center'>
                <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
                <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
                <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
            </div>
          </div>
          <div className='w-full flex-col space-y-4'>
          <img src={phototwo} className='mt-4 object-contain' alt="" />
              <div className='w-full flex justify-between px-4'>
              <h3 className='text-blue-500 tracking-wide'><a>See Statistics</a></h3>
              <button className='bg-blue-500 text-white px-12 py-1 rounded-lg hover:bg-blue-800 duration-200'>Boost Post</button>
              </div>
          </div>
          <div className='flex mt-2 px-2 space-x-4'>
            <FontAwesomeIcon icon={faHeart} className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faComment}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPaperPlane}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
          </div>
          <div className='mt-2 px-2'>
            <strong><p>saidrslnq</p></strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reprehenderit impedit molestias temporibus illum facere, id praesentium vel inventore similique vero officia sapiente aut omnis cupiditate necessitatibus laboriosam, modi enim!</p>
          </div>
          <div>
            <input placeholder='add comments'></input>
          </div>
        </div>
    </section>
  )
}

export default MainSection