import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar-style.scss';

import CompanyLogo from './../../Assets/img-logo1.jpg';
import FacebookLogo from './../../Assets/img-face.png';
import InstagramLogo from './../../Assets/img-instagram.png';
import TwitterLogo from './../../Assets/img-twitter.png';

export const Sidebar = () => { 
    return(
        <div className="sidebar">
            <Link to="#" className="link">
                <div className="sidebar-header">
                    <img className="logo" src={CompanyLogo} alt="Logo"/>
                    <div className="logo-text">
                        <h4>Paulina Garcìa</h4>
                        {/* <p>Photograohy & Video</p> */}
                        <span className="subtitle">Photograohy & Video</span>
                    </div>
                </div>
            </Link>

            <div className="sidebar-content">
                <Link to="/" className="link">INICIO </Link>
                <Link to="/galeria" className="link">GALERIA </Link>
                <Link to="/portafolio" className="link">PORTAFOLIO </Link>
                <Link to="/acerca-de-mi" className="link">ACERCA DE MI </Link>
            </div>
            <div className="sidebar-footer">
                <div className="social">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img src={FacebookLogo} alt="Facebook"/>
                    </a>
                    <a href="https://instagram.com/pauli.naph?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <img src={InstagramLogo} alt="Instagram"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img src={TwitterLogo} alt="Twitter"/>
                    </a>
                </div>
                {/* <p>@ 2022 PaulinaPhoto by DevJhon</p> */}
                <span className="copyright">&#169; 2022 PaulinaPhoto by ImJhon</span>
            </div>
        </div>
    )
}
export default Sidebar;