import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PayPal from '../Images/paypal.png'
import Lodge from '../Images/lodge_day.jpg'
import '../CSS/Support.css'

const Support = () => {
  const location = useLocation();
  const { id } = location.state || {}; // Ensure this is being passed correctly
  const [stateId, setStateId] = useState(parseInt(id, 10)); // Convert to number and set as initial state

  useEffect(() => {
    const newId = parseInt(id, 10);
    if (newId && newId !== stateId) {
      setStateId(newId);
    }
  }, [id, stateId]);

  const renderContent = () => {
    switch(stateId) {
      case 1:
        return (
          <div className='content'>
            <h2>Donations</h2>
            <br />
            <p><b>Donating via Mail</b></p>
            <p>The Alumni Association appreciates your gifts which can be made payable to:</p>
            <p>"Alpha Rho Alumni Association" and mailed to the following address:</p>
            <br />
            <p>Alpha Rho Alumni Association</p>
            <p>c/o Dr. Michael C. Illuzzi</p>
            <p>114 College Avenue</p>
            <p>New Brunswick, NJ 08901</p>
            <br />
            <p><b>Donating via PayPal</b></p>
            <p>By selecting the Donate button below, you will be redirected to the PayPal website and an Alpha Rho Alumni Association donation page.</p>
            <a href="https://www.paypal.com" rel="noreferrer" target='_blank'><img src={PayPal} alt="paypal link"></img></a>
            <p><i>The Alpha Rho Alumni Association is a 501(c)(7) charitable organization. Gifts to the Alumni Association are not tax-deductible.</i></p>
          </div>
        );
      case 2:
        return (
          <div className='content'>
            <h2>Member Dues</h2>
            <p>Member dues content</p>
          </div>
        );
      default:
        return (
          <div className='content'>
            <h2>Donations</h2>
            <br />
            <p><b>Donating via Mail</b></p>
            <p>The Alumni Association appreciates your gifts which can be made payable to:</p>
            <p>"Alpha Rho Alumni Association" and mailed to the following address:</p>
            <br />
            <p>Alpha Rho Alumni Association</p>
            <p>c/o Dr. Michael C. Illuzzi</p>
            <p>114 College Avenue</p>
            <p>New Brunswick, NJ 08901</p>
            <br />
            <p><b>Donating via PayPal</b></p>
            <p>By selecting the Donate button below, you will be redirected to the PayPal website and an Alpha Rho Alumni Association donation page.</p>
            <a href="https://www.paypal.com" rel="noreferrer" target='_blank'><img src={PayPal} alt="paypal link"></img></a>
            <p><i>The Alpha Rho Alumni Association is a 501(c)(7) charitable organization. Gifts to the Alumni Association are not tax-deductible.</i></p>
          </div>
        );
    }
  };

  return (
    <div className="main">
      <img src={Lodge} alt="lodge"></img>
      {renderContent()} 
    </div>
  );
};

export default Support;
