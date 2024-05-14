import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from '../Images/Badge.png';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="top-banner">
        <a href="mailto:info@AlphaRhoAlumniAssociation.org" className="email-link">info@AlphaRhoAlumniAssociation.org</a>
        <div className="banner-quote">"Once a Chi Psi, Always a Chi Psi"</div>
      </div>

      <div className="bottom-banner">
        <div>
          <DropdownButton id="dropdown-basic-button" title="History">
            <Dropdown.Item href="#/action-1">Our History</Dropdown.Item>
            <Dropdown.Item href="#/action-2">RhoBoat</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Lost Alumni</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Leadership">
            <Dropdown.Item href="#/action-1">Officers & Trustees</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Lodge Management</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Alpha & Alumni Affairs</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Events">
            <Dropdown.Item href="#/action-1">Annual Dart Tournament</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Annual Golf Tournament</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Support">
            <Dropdown.Item href="#/action-1">Donate</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Member Dues</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      <div className="logo">
        <Link to="/Home">
          <img src={Badge} alt="badge"></img>
          <div>Alpha Rho Alumni Association</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
