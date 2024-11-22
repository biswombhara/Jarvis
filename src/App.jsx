import About from './components/About/About'
import AdvancedJarvis from './components/Advanced/AdvancedJarvis'
import './App.css'
import Body from './components/Home/Body'
import SideBar from './components/Home/SideBar'
import TopBar from './components/Home/TopBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Setting from './components/Settings/Setting'
import Help from './components/Help/Help'
import Payment from './components/Payment/Payment'

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
    <Route path='/settings' element={<Setting/>} />
    <Route path='/help' element={<Help/>} />
    <Route path='/payment' element={<Payment/>} />
    </Routes>
    </BrowserRouter> 
  )
}

export default App
