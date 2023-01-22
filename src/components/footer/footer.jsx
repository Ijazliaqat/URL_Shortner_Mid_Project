import React from 'react'
import './footer.css';


const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="text">{`Copyright © ${year} Alpha, Bravo, Charlie`}</footer>;
  };
  
  export default Footer;