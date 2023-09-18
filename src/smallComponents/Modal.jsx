import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext';

const Modal = ({id,comment}) => {
    const {sendDeletedData,sendEditedData} = useContext(GlobalContext);
    const handleClose = () => {
        document.getElementById("modal").classList.remove("flex");
        document.getElementById("modal").classList.add("hidden");
    }
    const handleDelete = () => {
        sendDeletedData(id)
    }

    const handleEdit = () => {
        debugger;
        sendEditedData(id,comment);
        }

  return (
    <div id='modal' className='fixed z-1 left-0 top-0 w-full hidden h-full overflow-auto bg-[rgb(0,0,0)] bg-[rgb(0,0,0,0.4)]'>
        <div className='w-full flex h-screen justify-center items-center flex-col gap-2' id='myModal'>
            <div className='w-full justify-end items-end flex px-28 '>
        <button onClick={handleClose} className='text-5xl bg-gray-600 text-center flex items-center justify-center  text-white hover:text-gray-600 duration-200 hover:bg-white pb-2 px-2'>&times;</button>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <h3 className='text-3xl text-white bg-gray-600 px-12 py-2 rounded-lg w-full text-center cursor-pointer hover:bg-gray-300 duration-200 hover:text-black' onClick={handleEdit}>Edit</h3>
            <h3 className='text-3xl text-white bg-gray-600 px-12 py-2 rounded-lg w-full text-center cursor-pointer hover:bg-gray-300 duration-200 hover:text-black' >Send</h3>
            <h3 className='text-3xl text-white bg-gray-600 px-12 py-2 rounded-lg w-full text-center cursor-pointer hover:bg-gray-300 duration-200 hover:text-black' onClick={handleDelete}>Delete</h3>
        </div>
        </div>
    </div>
  )
}

export default Modal