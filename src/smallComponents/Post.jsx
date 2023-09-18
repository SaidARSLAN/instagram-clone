import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import EachPost from './EachPost'

const Post = () => {
  const {posts} = useContext(GlobalContext);



    

  return (
    <div className='relative'>
        {posts.map((post) => {
            return (
            <EachPost post={post} key={post.id}/>
          )
        })}
        </div>
    
  )
}

export default Post