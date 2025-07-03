import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import './App.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { Toaster } from 'react-hot-toast'



function App() {


  const[isLoggedIn , setIsLoggenIn] = useState(false)
  return (
    <div className="">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggenIn={setIsLoggenIn} />
      <Toaster/>
    
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggenIn={setIsLoggenIn}/>}/>
        <Route path="/signup" element={<SignUp setIsLoggenIn={setIsLoggenIn}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    

    </div>
  )
}

export default App
