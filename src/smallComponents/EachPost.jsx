import { useState } from 'react'
import { userone } from '../contents'
import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faDeleteLeft, faEdit, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const EachPost = ({post}) => {
    const [commentConrol,setCommentControl] = useState(false);
    const [comments,setComments] = useState([]);
    const [comment,setComment] = useState("");
    const {sendDeletedData,sendEditedData} = useContext(GlobalContext);
    const [editControl, setEditControl] = useState(false);
    const [edittedComment,setEdittedComment] = useState("");

    const handleDelete = () => {
        sendDeletedData(post.id);
    }

    const handleEdit = () => {
        setEditControl(true);
        setEdittedComment(post.comment);
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        sendEditedData(post.id,edittedComment)
        setEditControl(false);
    }
    const handleLike = (event) => {
        console.log("test");
          event.target.classList.toggle("text-rose-400")
      }
  
      const addComment = () => {
        setCommentControl(true);
      }
  
      const sendComment = (event) => {
        event.preventDefault();
        setComments([...comments,comment]);
        setCommentControl(false);
      }

      

  return (
    <div className='flex flex-col mb-20'>
        
            <div className='flex justify-between'>
              <div className='flex space-x-2'>
              <img src={userone} className='w-10 h-10 rounded-full border-2 p-1 border-gray-300 cursor-pointer'/>
              <p className='text-sm flex items-center justify-center cursor-pointer hover:text-gray-600 duration-200'>saidrslnq</p>
              <li className='mt-2'></li>
              <p className='flex items-center justify-center text-gray-400'>1g</p>
              </div>
              <div className='flex gap-4 pr-2 mt-3'>
                <FontAwesomeIcon icon={faDeleteLeft} className='text-2xl cursor-pointer hover:text-red-700 duration-200' onClick={handleDelete}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faEdit} className='text-2xl cursor-pointer hover:text-green-700 duration-200' onClick={handleEdit}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faPaperPlane} className='text-2xl cursor-pointer hover:text-blue-700 duration-200'></FontAwesomeIcon>
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
              <FontAwesomeIcon icon={faHeart} className='text-2xl hover:text-gray-600 duration-200 cursor-pointer' onClick={handleLike}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faComment}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer' onClick={addComment}></FontAwesomeIcon>
              <NavLink to="/sendpost"><FontAwesomeIcon icon={faPaperPlane}  className='text-2xl hover:text-gray-600 duration-200 cursor-pointer'></FontAwesomeIcon></NavLink>
            </div>
            <div className='mt-2 px-2'>
              {commentConrol ? <form className='flex gap-3'>
                <input type="text" placeholder='comment...' className='w-[200px] rounded-lg px-2 py-1 h-10 border-2 border-black' value={comment} onChange={e => setComment(e.target.value)} />
              <button className='bg-blue-500 px-4 rounded-lg text-white hover:bg-blue-800 duration-200' onClick={sendComment}>Add</button>
              </form> : <div>{comments.map((c) => {
                    return <p><strong>mertansq92 </strong> {c}</p>
              })}</div>}
              <strong><p>saidrslnq</p></strong>
              <p>{editControl ? <form><input placeholder='rewrite comment' value={edittedComment} onChange={e => setEdittedComment(e.target.value)}></input><button onClick={handleEditSubmit}>Submit</button></form> : post.comment}</p>
            </div>
            <div>
              <input placeholder='add comments' className='px-2'></input>
            </div>
          </div>
  )
}

export default EachPost