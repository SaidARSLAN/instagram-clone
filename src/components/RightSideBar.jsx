import React from 'react'
import { anotherUsers, userone } from '../contents'

const RightSideBar = () => {
  return (
    <div  className='absolute right-16 hidden lg:flex lg:flex-col space-y-4'>
      <div className='flex w-full space-x-24 items-center'>
        <div className='flex'>
          <img src={userone} className='w-[50px] rounded-full border-[2px] border-gray-500 cursor-pointer'/>
        <div className='pl-4'>
        <h3 className='text-sm'><strong>saidarslanq</strong></h3>
        <p className='text-sm'>saidarslanq</p>
        </div>
        </div>
        <div>
          <p className='text-blue-600 cursor-pointer text-xs font-bold'>Change Account</p>
        </div>
      </div>
      <div className='flex w-full space-x-24 items-center'>
        <p className='text-xs font-bold text-gray-500'>Recommendation for you</p>
        <p className='text-xs font-bold'>See All</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {anotherUsers.map((user) => {
            return<div className='flex space-x-24 items-center justify-center'>  
            <div className='flex gap-4 my-4'>
              <img src={user.photo}  className='w-[40px] rounded-full'/>
              <div className='flex flex-col'>
              <p className='text-xs font-bold'>{user.username}</p>
            <p className='text-xs'>Following you</p>
            </div>
            </div>
            <p className='text-center bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer'>Follow</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default RightSideBar