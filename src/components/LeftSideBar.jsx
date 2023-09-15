import { faChevronDown, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LeftSideBar = () => {
  return (
    <section className="fixed top-0 bg-white w-full py-4 px-0 z-10">
      <nav className="w-full flex items-center px-2 space-x-6">
        <div>
          <h1 className="flex-none flex w-full gap-1 text-2xl font-danceScirpt cursor-pointer hover:bg-gray-200 duration-200 p-1 items-center justify-center text-center">
              INSTAGRAM<span><FontAwesomeIcon className="text-xs cursor-pointer mb-1 ml-1" icon={faChevronDown}></FontAwesomeIcon></span>
          </h1>
        </div>
        <div className="flex-1 flex items-center justif-center space-x-6">
          <input placeholder="Search" className="px-4 py-1 rounded-lg w-[240px] bg-gray-200"></input>
          <FontAwesomeIcon icon={faHeart} className="text-xl hover:text-2xl cursor-pointer duration-200 hover:text-rose-600">
          </FontAwesomeIcon>
        </div>
      </nav>
      </section>
  )
}

export default LeftSideBar