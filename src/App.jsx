import MainLayout from './components/MainLayout'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className='flex w-full h-full bg-background'>
      <SideBar />
      <MainLayout />
    </div>
  )
}

export default App
