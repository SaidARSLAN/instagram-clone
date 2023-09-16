import { anotherUsers } from '../contents'

const SendPost = () => {
    const handleSend = (event) => {
            event.target.classList.remove("bg-blue-500");
            event.target.classList.add("cursor-auto")
            event.target.textContent="Sended";
            event.target.classList.remove("text-white");
            event.target.classList.remove("hover:bg-blue-700")
            event.target.classList.remove("duration-200")
    }
    return (
    <div className='absolute  px-2 flex w-full justify-center items-center flex-col space-y-4 h-screen'>
    <h3 className='text-2xl font-bold'>SendPost</h3>
    <ul className='w-full'>
        {anotherUsers.map((user) => {
        return (
            <li className='w-full flex justify-between items-center px-4'>
                <div className='flex gap-4 my-4 items-center w-full'>
                <img src={user.photo} className='w-[50px] h-[50px]'></img>
                <p>{user.username}</p>
                </div>
                <button className='bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700 duration-200' onClick={handleSend}>Send</button>
            </li>
        )
        }
        )}
    </ul>
    </div>
  )
}

export default SendPost