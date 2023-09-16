import React from 'react'
import { photone, phototwo, userone } from '../contents'

const Profile = () => {
  return (
    <div className='absolute  top-20 w-full mt-4 flex flex-col items-center gap-4 overflow-x-hidden'>
        <div className='flex gap-4'>
        <img src={userone} className='w-[100px] h-[100px] rounded-full border-2 border-gray-500 p-2 cursor-pointer'/>
        <div className='flex flex-col item-start'>
        <h3 className='text-2xl'>Said ARSLAN</h3>
        <p className='text-sm'>saidrslnq</p>
        <p className='text-xs'>@change.organization @yunusemreakdag</p>
        <p className='text-xs'>Gezi,Konserler-Eğlence Turları-Tatiller-Club Etkinlikleri</p>
        <p className='text-xs'>İletişim: 0 553 215 97 00</p>
        </div>
        </div>
        <div className='w-full flex items-center text-center mt-4 ml-40'>
        <h3 className='w-[50px] h-[50px] text-center flex justify-center items-center text-4xl border-2 border-gray-400 rounded-full cursor-pointer hover:bg-gray-300 duration-200'>+</h3>
        </div>
        <div className='w-full bg-gray-500 h-[2px]'></div>
        <div className='grid grid-cols-2 gap-x-2 gap-y-1'>
            <img src={photone} className='w-[200px] h-[150px]'/>
            <img src={phototwo} className='w-[200px] h-[150px]'/>
            <img src={photone} className='w-[200px] h-[150px]'/>
            <img src={phototwo} className='w-[200px] h-[150px]'/>
            <img src={photone} className='w-[200px] h-[150px]'/>
            <img src={phototwo} className='w-[200px] h-[150px]'/>
            <img src={photone} className='w-[200px] h-[150px]'/>
            <img src={phototwo} className='w-[200px] h-[150px]'/>
        </div>
        </div>
  )
}

export default Profile