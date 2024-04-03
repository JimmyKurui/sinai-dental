// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import './App.css'

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

import FloatingButton from './components/ui/FloatingButton'

import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <FloatingButton />
      </main>
      <Footer />
    </Router>
  )
}

export default App
