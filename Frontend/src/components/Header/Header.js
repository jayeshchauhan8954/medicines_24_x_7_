

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
   <h1>P</h1>
   {/* <img src={logo} alt="Logo" /> */}
   <p>logo</p>
      </div>
      <form className="search">
        <input type="text" placeholder="Search..." className="search_input" />
        <button type="submit" className="search_button">Go!</button>
      </form>
      <nav className="nav">
        <ul className="nav_list">
        <li ><NavLink className="nav_item" to="/medicine" >Medicine</NavLink> </li>
        <li ><NavLink className="nav_item" to="/healthcare" >Healthcare</NavLink></li>
        <li ><NavLink className="nav_item" to="/labtest"  >Lab Tests</NavLink></li>
        <li ><NavLink  className="nav_item" to="/sugeries" >Surgeries</NavLink></li>
        <li ><NavLink className="nav_item" to="/plus" >PLUS</NavLink></li>
        <li ><NavLink className="nav_item" to="/offers" >Offers</NavLink></li>
        <li ><NavLink className="nav_item" to="/healthblog" >HealthBlogs</NavLink></li>
      </ul>
      
      
      </nav>
      
    </header>
  )
}

export default Header
