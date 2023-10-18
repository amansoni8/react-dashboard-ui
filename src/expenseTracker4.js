import React from 'react';
import './ExpenseTracker.css'; // Import the CSS file for styling
import './YourComponent.css';
import sale from './icons/sale.png';

const ExpenseTracker4 = ({ totalExpense }) => {
  return (
    <div className="expense-tracker">
      {/* <div className="rupee-logo">
        <img src="/icons/dollar.png" alt="Dollar Logo" />
      </div>
      <div className="total-expense">
        <div>Total Sales<br/>
            <h3>$89k</h3>
           <h4> &#x2191;</h4>11% this week
        </div>
      </div> */}
   
    <div className="rupee-logo">
    <img src={sale} alt="Dollar Logo"
    style={{ width: '100px', height: '100px' }} />
      </div>
      <div className="some-content">
      Total Sales<br/>
      <h3>$89k</h3>
        <p className='para'>
          <span className="green-arrow">&#x2191;11% </span> This Week
        </p>
      </div>
    </div>
   
 );
};


export default ExpenseTracker4;
