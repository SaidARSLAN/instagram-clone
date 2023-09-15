import './App.css'
import BottomSideBar from './components/BottomSideBar'
import LeftSideBar from './components/LeftSideBar'
import MainSection from './components/MainSection'
import RightSideBar from './components/RightSideBar'


function App() {

  return (
    <main className='relative'>
      <section className='relative'>
        <LeftSideBar />
      </section>
      <section className='relative'>
        <MainSection />
      </section>
      <section className='relative'>
        <BottomSideBar />
      </section>
      <section className='relative'>
        <RightSideBar />
      </section>
    </main>
  )
}

export default App
