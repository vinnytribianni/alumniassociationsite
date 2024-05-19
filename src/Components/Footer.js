import React from 'react';
import footer_img from '../Images/chi_psi.jpeg';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <div>
    <footer className='footer'>  {/* Use semantic <footer> element */}
        <div className='footer-item'>
            <p><i>"Once a Chi Psi, Always a Chi Psi"</i></p>  {/* Ensure quotes are closed */}
        </div>
        <div className='footer-item'>
            <img alt="Chi Psi Logo" src={footer_img}></img>  {/* More descriptive alt text */}
        </div>
        <div className='footer-item'>
            <p>info@AlphaRhoAlumniAssociation.org</p>
        </div>
    </footer>
    <br />
    <p>© Copyright 2024 Alpha Rho Alumni Association | All Rights Reserved</p>
    </div>
  
  );
};

export default Footer;






