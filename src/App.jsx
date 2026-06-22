import React from 'react'
import Home from './pages/home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Payment from './pages/payment'
import DestinationPage from './pages/destination'

const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/destination' element={<DestinationPage/>} />
    </Routes>
    </Router>
    
    </>
  )
}

export default App