import React from 'react'
import Home from './pages/home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Payment from './pages/payment'
import DestinationPage from './pages/destination'
import Contact from './pages/contact'

const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/destination' element={<DestinationPage/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
    
    </>
  )
}

export default App