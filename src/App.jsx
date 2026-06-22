import React from 'react'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DestinationPage from './pages/destination'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/destination' element={<DestinationPage/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App