import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";

import CompanyLogo from './../../Assets/img-logo1.png';

import './navbar-style.scss';

export const Navbar = () => {

  const [toogle, setToogle] = useState(false);

    //Method to show NAV
  const handleToogle = () => {
    setToogle(!toogle); 
    console.log("toogle de navbar!!")
  };  

  return(
    <header>
      <div className="logo">
        <img className="logo-img" src={CompanyLogo} alt="Logo"/>
        <div className="logo-text">
            <h4>Paulina Garcìa</h4>
            {/* <p>Photograohy & Video</p> */}
            <span className="subtitle">Photography & Video</span>
        </div>
      </div>

      {/* <div className="logo">Logo Page</div> */}


      <div className="hamburger" onClick={handleToogle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={toogle?"nav_bar active":"nav_bar"}>
      {/* <div className="nav_bar"> */}
        <ul>
          {/* <li><Link to="/" className="active1">INICIO</Link></li> */}
          <li><Link to="/" onClick={handleToogle}>INICIO</Link></li>
          <li><Link to="/galeria" onClick={handleToogle}>GALERIA</Link></li>
          <li><Link to="/portafolio" onClick={handleToogle}>PORTAFOLIO</Link></li> 
          <li><Link to="/acerca-de-mi" onClick={handleToogle}>ACERCA DE MI</Link></li> 
        </ul>
      </div>
    </header>
  )
  
}
export default Navbar;