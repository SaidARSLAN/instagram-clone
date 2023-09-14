import './App.css'
import LeftSideBar from './components/LeftSideBar'
import MainSection from './components/MainSection'
import RightSideBar from './components/RightSideBar'


function App() {

  return (
    <main className='grid grid-cols-3 container mx-auto mt-12 px-9'>
      <section>
        <LeftSideBar />
      </section>
      <section>
        <MainSection />
      </section>
      <section>
        <RightSideBar />
      </section>
    </main>
  )
}

export default App
