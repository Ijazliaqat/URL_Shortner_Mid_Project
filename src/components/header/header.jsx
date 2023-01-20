import React from 'react'
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
    <nav>
      <Link className='menu_btn' to="/" style={{fontSize:'25px', color:'white', fontFamily:'Verdana'}}>Short.ly</Link>
      <Link className='menu_btn' to="/">Home</Link> 
      <Link className='menu_btn' to="/history">History</Link>
    </nav>
    </>
  )
}

export default Header;