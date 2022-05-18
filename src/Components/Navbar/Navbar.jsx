import React from "react";
import logo from "../../Asset/logo.png";
import { Link } from "react-router-dom"; 

import "./Navbar.css"

function Navbar(){
    return (
        <div className="flex-container Navbar">
          <img className="logo" src={logo} alt="logo.png"/>
        <ul className='navbarlink'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li> 
        </ul>
      </div>
    )
}

export default Navbar

