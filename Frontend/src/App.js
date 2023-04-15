import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './components/Header/Header.css'
import './components/Footer/Footer.css'


const App = () => {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      </Routes>
      <Footer/>
      </Router>

    </div>
  )
}


export default App
