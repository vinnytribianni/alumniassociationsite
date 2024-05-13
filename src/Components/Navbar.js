import React from 'react'
import { Link } from 'react-router-dom';
import Badge from '../Images/Badge.png';
import '../CSS/Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar">
        <div className="top-banner">
            <a href="mailto:email@example.com" className="email-link">info@AlphaRhoAlumniAssociation.org</a>
            <div className="banner-quote">"Once a Chi Psi, Always a Chi Psi"</div>
        </div>
        <div className="bottom-banner">
            <div className="left-bottom-banner">
            <button>History</button>
            <button>Programs</button>
            </div>
            <div className="right-bottom-banner">
            <button>Events</button>
            <button>Support</button>
            </div>
        </div>
        <div className="logo">
            <a href="/Home">
            <img src={Badge} alt="badge"></img>
            <div>Alpha Rho<br />Alumni<br />Association</div>
            </a>
        </div>
    </div>
  );
};


export default Navbar;


