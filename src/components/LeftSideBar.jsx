import { faChevronDown, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { photone, userone} from "../contents"

const LeftSideBar = () => {

  const handleDropDown = () => {
      if(document.querySelector("#dropdown").classList.contains("flex")) {
        document.querySelector("#dropdown").classList.remove("flex")
        document.querySelector("#dropdown").classList.add("hidden")
      }
      else {
        document.querySelector("#dropdown").classList.remove("hidden")
        document.querySelector("#dropdown").classList.add("flex")
      }
  }

  return (
    <section className="bg-white fixed w-full py-4 px-0 z-10 border-b-2">
      <nav className="w-full flex items-center px-2 space-x-2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex-none flex w-full gap-1 text-2xl font-danceScirpt cursor-pointer hover:bg-gray-200 duration-200 p-1 items-center justify-center text-center group rounded-lg"
            onClick={handleDropDown}
          >
              INSTAGRAM<span><FontAwesomeIcon className="text-xs cursor-pointer mb-1 ml-1 hover:text-gray-800 group-hover:text-sm duration-200" icon={faChevronDown}></FontAwesomeIcon></span>
          </h1>
          <ul className="hidden flex-col border-2 rounded-lg p-2 bg-white absolute top-[52px]" id="dropdown">
            <li className="flex space-x-2 hover:bg-gray-300 p-1 cursor-pointer rounded-lg" ><img src={userone} className="w-[25px] h-[25px] rounded-full "/><span>saidrsln</span></li>
            <li><a href="" className="whitespace-nowrap hover:bg-gray-300 p-1 rounded-full flex items-center space-x-1 justify-center "><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span>Create New Account</span></a></li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center space-x-6">
          <input placeholder="Search" className="px-4 py-1 rounded-lg w-[240px] bg-gray-200"></input>
          <FontAwesomeIcon icon={faHeart} className="text-xl hover:text-2xl cursor-pointer duration-200 hover:text-rose-600">
          </FontAwesomeIcon>
        </div>
      </nav>
      </section>
  )
}

export default LeftSideBar