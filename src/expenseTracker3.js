import React from 'react';
import './ExpenseTracker.css'; // Import the CSS file for styling
import './YourComponent.css';
import balance from './icons/balance.png';

const ExpenseTracker3 = ({ totalExpense }) => {
  return (
    <div className="expense-tracker">
      {/* <div className="rupee-logo">
        <img src="/icons/dollar.png" alt="Dollar Logo" />
      </div>
      <div className="total-expense">
        <div>Balance
        </div>
        <p>{`₹${totalExpense}`}</p>
      </div> */}
      <div className="rupee-logo">
      <img src={balance} alt="Dollar Logo" 
      style={{ width: '100px', height: '100px' }}/>
      </div>
      <div className="some-content">
      Balance<br/>
      <h3>$2.4k</h3>
        <p className='para'>
        <span className="red-arrow">&#x2193;2%</span> this month
        </p>
      </div>
    </div>
    
  );
};

export default ExpenseTracker3;
