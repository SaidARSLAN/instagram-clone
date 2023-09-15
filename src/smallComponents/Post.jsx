import React, { useContext, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import GlobalContext from '../context/MainContext'
const Post = () => {
  const {posts} = useContext(GlobalContext);

    const handleThreePoints = () => {
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden")
        modal.classList.add("flex");
    }

    window.onclick = function(event) {
        console.log(event.target.id)
        if (event.target.id == "myModal") {
            document.getElementById("modal").classList.remove("flex");
            document.getElementById("modal").classList.add("hidden");}
    }

  return (
    <div className='relative'>
        {posts.map((post) => {
          console.log(post)
            return (
            <div className='flex flex-col mb-20'>
            <div className='flex justify-between'>
              <div className='flex space-x-2'>
              <img src={""} className='w-10 h-10 rounded-full border-2 p-1 border-gray-300 cursor-pointer'/>
              <p className='text-sm flex items-center justify-center cursor-pointer hover:text-gray-600 duration-200'>""</p>
              <li className='mt-2'></li>
              <p className='flex items-center justify-center text-gray-400'>1g</p>
              </div>
              <div className='flex space-x-[2px] items-center justify-center cursor-pointer' onClick={handleThreePoints}>
                  <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
                  <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
                  <div className='w-[5px] h-[5px] rounded-full bg-gray-600'></div>
              </div>
            </div>
            <div className='w-full flex-col space-y-4'>
            <img src={post.img} className='mt-4 object-contain' alt="" />
                <div className='w-full flex justify-between'>
                <h3 className='text-blue-500 tracking-wide cursor-pointer'><a>See Statistics</a></h3>
                <button className='bg-blue-500 text-white px-12 py-1 rounded-lg hover:bg-blue-800 duration-200'>Boost Post</button>
                </div>
            </div>
            <div className='flex mt-2 px-2 space-x-4'>
              <FontAwesomeIcon icon={faHeart} className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faComment}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faPaperPlane}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon>
            </div>
            <div className='mt-2 px-2'>
              <strong><p>{""}</p></strong>
              <p>{post.comment}</p>
            </div>
            <div>
              <input placeholder='add comments' className='px-2'></input>
            </div>
          </div>
          )
        })}
        </div>
    
  )
}

export default Post