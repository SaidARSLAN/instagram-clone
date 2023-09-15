import React, { useContext, useState } from 'react'
import GlobalContext from '../context/MainContext';

const CreatePost = () => {
    const [imgPath, setImgPath] = useState();
    const [comment, setComment] = useState("");
    const [hashtags, setHashtags] = useState("");

    const {sendPostData} = useContext(GlobalContext);

    const handleClick = (event) => {
        event.preventDefault();
        sendPostData(imgPath,comment,hashtags);
    }
  return (
    <div className='absolute top-28 w-full flex flex-col items-center justify-center'>
        <h2 className='text-2xl mb-8 font-bold'>Create Post</h2>
        <form className='flex flex-col space-y-4'>
        <input type='file' className='cursor-pointer' value={imgPath} onChange={e  =>  setImgPath(e.target.value)}/>
            <textarea rows={5} className='border-2 border-gray-400 rounded-lg px-4 py-4 text-sm' placeholder='Your comments' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <input type='text' className='border-2 border-gray-4000 rounded-lg px-4 py-1 text-sm' placeholder='Hashtags' value={hashtags} onChange={(e) => setHashtags(e.target.value)}/>
            <button className='bg-blue-500 text-white px-2 py-1 rounded-lg text-center hover:bg-blue-800 duration-200' onClick={handleClick}>Submit</button>            
        </form>
    </div>
  )
}

export default CreatePost