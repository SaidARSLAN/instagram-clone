import React from 'react'
import { anotherUsers, userone } from '../contents'

const RightSideBar = () => {
  return (
    <div  className='absolute right-16 hidden lg:flex lg:flex-col space-y-4'>
      <div className='flex w-full space-x-24 items-center'>
        <div className='flex'>
          <img src={userone} className='w-[50px] rounded-full'/>
        <div>
        <h3>saidarslanq</h3>
        <p>saidarslanq</p>
        </div>
        </div>
        <div>
          <p>Change Account</p>
        </div>
      </div>
      <div className='flex w-full space-x-24 items-center'>
        <p>Recommendation for you</p>
        <p>See All</p>
      </div>
      <div>
        {anotherUsers.map((user) => {
            return<div className='flex space-x-24'>  
            <div className='flex gap-4 my-4'>
              <img src={user.photo}  className='w-[50px] rounded-full'/>
              <div className='flex flex-col'>
              <p>{user.username}</p>
            <p>Following you</p>
            </div>
            </div>
            <p>Follow</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default RightSideBar