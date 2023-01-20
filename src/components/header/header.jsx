import React from 'react'
import {Link} from "react-router-dom";
import './header.css';

/*This is header component*/ 

function Header() {
  return (
    <nav >
      <Link className="logo" to="/">Short.<span>ly</span></Link>
      <Link className="header" to="/">Home</Link> 
      <Link className="header" to="/history">History</Link>
    </nav>
  )
}

export default Header;