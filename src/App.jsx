import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import './App.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { Toaster } from 'react-hot-toast'
import PrivateRoute from './components/PrivateRoute.jsx'



function App() {


  const[isLoggedIn , setIsLoggedIn] = useState(false)
  return (
    <div className="w-screen h-screen bg-richblack-800 text-white">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Toaster/>
    
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          
          <PrivateRoute isLoggedIn={isLoggedIn}>

            <Dashboard/>
          </PrivateRoute>
          }/>
      </Routes>
    

    </div>
  )
}

export default App
