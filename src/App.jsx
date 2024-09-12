
import About from './About'
import AdvancedJarvis from './AdvancedJarvis'
import './App.css'
import Body from './components/Body'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return ( <BrowserRouter>
  <Routes>
    <Route path='/' element={
    <div className='flex'>
      <SideBar/>
      <div className='flex items-center flex-col h-screen justify-between w-full'> 
        <TopBar/>
        <Body/>        
      </div>
    </div> 
    } />
    <Route path='/about' element={<About/>} />
    <Route path='/plan' element={<AdvancedJarvis/>} />
    </Routes>
    </BrowserRouter> 
  )
}

export default App
