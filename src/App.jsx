import './App.css'
import BottomSideBar from './components/BottomSideBar'
import LeftSideBar from './components/LeftSideBar'
import MainSection from './components/MainSection'
import { Route,Routes } from 'react-router'
import CreatePost from './pages/CreatePost'
import Notifications from './pages/Notifications'
import { Provider } from './context/MainContext'
import SearchSection from './pages/SearchSection'

function App() {

  return (
    <Provider>
    <main className='relative'>
      <section className='relative'>
        <LeftSideBar />
      </section>
      <section className='relative'>
        <BottomSideBar />
      </section>
      <Routes>
        <Route path="/" element={<MainSection />}></Route>
        <Route path='/createpost' element={<CreatePost />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/searchsection" element={<SearchSection />}></Route>
      </Routes>
    </main>
    </Provider>
  )
}

export default App
