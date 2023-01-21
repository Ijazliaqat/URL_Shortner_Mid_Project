import React from 'react'
import './footer.css';


const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="text">{`Copyright © Short.ly ${year}`}</footer>;
  };
  
  export default Footer;