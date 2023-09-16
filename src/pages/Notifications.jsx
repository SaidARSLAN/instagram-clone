import React from 'react'
import { anotherUsers, notifications } from '../contents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Notifications = () => {

    const handleFollow = (event) => {
        if (event.target.textContent === "Follow") {
            event.target.textContent = "Following";
        }
        else {
            event.target.textContent = "Follow";
        }
    }


  return (
    <div className='absolute top-20 px-2 flex flex-col w-full'>
        <div className='flex flex-col mb-2'>
        <h3 className='text-lg'><strong>This Week</strong></h3>
        <div>
            {notifications.map((notification) => {
                    return (<p className='px-2 py-2 hover:bg-gray-400 duration-200 cursor-pointer text-sm'><FontAwesomeIcon icon={faBell} className='text-xl mr-3'></FontAwesomeIcon>{notification}</p>)
            })}
        </div>
        </div>
        <div className='h-[1px] w-full bg-gray-400'></div>
        <div className='mt-4'>
        <h3 className='text-lg'><strong>Recommendations for you</strong></h3>
        <div>
            {anotherUsers.map((user) => {
                return (
                <div className='flex justify-between gap-x-2 py-3 px-2 mt-1 hover:bg-gray-400 duration-200'>
                    <div className='flex gap-x-2 mt-1'>
                    <img src={user.photo}  className='w-[50px] h-[50px] rounded-full border-4 border-gray-500'/>
                    <strong><p className='text-center flex justify-center mt-4 text-gray-700 items-center text-sm cursor-pointer hover:text-black duration-200'>{user.username}</p></strong>
                    </div>
                    <button className='bg-blue-500 text-white px-2 rounded-lg hover:bg-blue-700 duration-200' onClick={handleFollow}>Follow</button>
                </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Notifications