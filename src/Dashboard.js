import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faBox, faUser, faCoins, faBullhorn, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const iconStyle = {
    marginRight: '10px', // Adjust the space as needed
  };

  return (
    <div className="dashboard">
      
        <nav className="dashboard-nav">
          <h3>Dashboard</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faKey} style={iconStyle} />
              Dashboard
            </li>
            <li>
              <FontAwesomeIcon icon={faBox} style={iconStyle} />
              Product
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} style={iconStyle} />
              Customer
            </li>
            <li>
              <FontAwesomeIcon icon={faCoins} style={iconStyle} />
              Income
            </li>
            <li>
              <FontAwesomeIcon icon={faBullhorn} style={iconStyle} />
              Promote
            </li>
            <li>
              <FontAwesomeIcon icon={faQuestionCircle} style={iconStyle} />
              Help
            </li>
          </ul>
        </nav>
       
    </div>
  );
};

export default Dashboard;
