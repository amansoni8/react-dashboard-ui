import React from 'react';
import './ExpenseTracker.css'; // Import the CSS file for styling
import './YourComponent.css';
import dollar from './icons/dollar.png';

const ExpenseTracker1 = ({ totalExpense }) => {
  return (
    <div className="expense-tracker">
    <div className="rupee-logo">
    <img src={dollar} alt="Dollar Logo" 
    style={{ width: '100px', height: '100px' }}/>
      </div>
      <div className="some-content">
      Earnings<br/>
      <h3>$198k</h3>
        <p className='para'>
          <span className="green-arrow">&#x2191;37%</span> this month
        </p>
      </div>
    </div>
  );
};

export default ExpenseTracker1;
