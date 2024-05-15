import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Badge from '../Images/Badge.png';
import '../CSS/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const nav = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const id = href.split('-')[1];
    const parentTitle = event.target.closest('.dropdown').getAttribute('title').toLowerCase();

    // Navigate to the appropriate component with the ID passed as state
    navigate(`/${parentTitle}`, { state: { id } });
  };

  return (
    <div className="navbar">
      <div className="bottom-banner">
        <div>
          <DropdownButton id="dropdown-basic-button" title="History" className="dropdown">
            <Dropdown.Item onClick={nav} href="#/action-1">Our History</Dropdown.Item> 
            <Dropdown.Item onClick={nav} href="#/action-2">RhoBoat</Dropdown.Item> 
            <Dropdown.Item onClick={nav} href="#/action-3">Lost Alumni</Dropdown.Item> 
          </DropdownButton> 
          <DropdownButton id="dropdown-basic-button" title="Leadership" className="dropdown">
            <Dropdown.Item onClick={nav} href="#/action-1">Officers & Trustees</Dropdown.Item>
            <Dropdown.Item onClick={nav} href="#/action-2">Lodge Management</Dropdown.Item>
            <Dropdown.Item onClick={nav} href="#/action-3">Alpha & Alumni Affairs</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="logo">
          <Link to="/Home">
            <img src={Badge} alt="badge"></img>
            <div>Aρ Alumni Association</div>
          </Link>
        </div>

        <div>
          <DropdownButton id="dropdown-basic-button" title="Events" className="dropdown">
            <Dropdown.Item onClick={nav} href="#/action-1">Annual Dart Tournament</Dropdown.Item>
            <Dropdown.Item onClick={nav} href="#/action-2">Annual Golf Tournament</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Support" className="dropdown">
            <Dropdown.Item onClick={nav} href="#/action-1">Donate</Dropdown.Item>
            <Dropdown.Item onClick={nav} href="#/action-2">Member Dues</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



