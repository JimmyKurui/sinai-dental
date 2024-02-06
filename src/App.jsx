// import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        {/* Router /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
