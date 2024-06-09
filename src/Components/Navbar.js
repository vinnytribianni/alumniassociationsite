import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Badge from '../Images/Badge.png';
import '../CSS/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const nav = (id, parentTitle) => {
    navigate(`/${parentTitle}`, { state: { id } });
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top function for the logo
  };

  return (
    <div className="banner">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="sidebar-toggle"><FontAwesomeIcon icon={faBars} /></label>
      <div className='option'>
        <DropdownButton id="dropdown-history-button" title="History" className="dropdown">
          <Dropdown.Item onClick={() => nav('1', 'history')}>Our History</Dropdown.Item>
          <Dropdown.Item onClick={() => nav('2', 'history')}>Archives</Dropdown.Item>
          <Dropdown.Item onClick={() => nav('3', 'history')}>RhoBoat</Dropdown.Item>
          <Dropdown.Item onClick={() => nav('4', 'history')}>Lost Alumni</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className='option'>
        <DropdownButton id="dropdown-leadership-button" title="Leadership" className="dropdown">
          <Dropdown.Item onClick={() => nav('1', 'leadership')}>Officers & Trustees</Dropdown.Item>
          <Dropdown.Item onClick={() => nav('2', 'leadership')}>Lodge Management</Dropdown.Item>
          <Dropdown.Item onClick={() => nav('3', 'leadership')}>Alpha & Alumni Affairs</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="logo">
        <Link to="/" onClick={scrollToTop}>
          <img src={Badge} alt="badge"></img>
          <div>Alpha Rho<br />Alumni Association</div>
        </Link>
      </div>
      <div className='option'>
        <DropdownButton id="dropdown-events-button" title="Events" className="dropdown">
          <Dropdown.Item onClick={() => nav('1', 'events')}>Annual Dart Tournament</Dropdown.Item>
          <Dropdown.Item onClick={() => nav('2', 'events')}>Annual Golf Tournament</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className='option'>
        <DropdownButton id="dropdown-support-button" title="Support" className="dropdown">
          <Dropdown.Item onClick={() => nav('1', 'support')}>Donate</Dropdown.Item>
          <Dropdown.Item onClick={() => nav('2', 'support')}>Member Dues</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Navbar;
