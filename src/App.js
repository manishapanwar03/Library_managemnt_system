import React from 'react'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Otp from './Components/Otp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/otp" element={<Otp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App