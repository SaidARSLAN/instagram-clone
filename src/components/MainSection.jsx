import React from 'react'
import { photone, phototwo, userone, usertwo } from '../contents'
import Post from '../smallComponents/Post'
import Modal from '../smallComponents/Modal'

const MainSection = () => {
  return (
    <section className='w-full absolute top-[100px] px-3 flex flex-col'>
        <Post />
        <Modal />
    </section>
  )
}

export default MainSection