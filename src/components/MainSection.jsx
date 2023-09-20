import React from 'react'
import Post from '../smallComponents/Post'
import RightSideBar from './RightSideBar'

const MainSection = () => {
  return (
    <section className='absolute top-28 px-2 lg:px-[480px] lg:top-20 lg:flex lg:flex-row'>
        <Post />
        <RightSideBar />
    </section>
  )
}

export default MainSection