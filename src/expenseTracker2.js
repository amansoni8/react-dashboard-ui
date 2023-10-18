import React from 'react';
import './ExpenseTracker.css'; // Import the CSS file for styling
import './YourComponent.css';
import order from './icons/order.png';

const ExpenseTracker2 = ({ totalExpense }) => {
  return (
    <div className="expense-tracker">
      {/* <div className="rupee-logo">
        <img src="/icons/dollar.png" alt="Dollar Logo" />
      </div>
      <div className="total-expense">
        <div>Orders
        </div>
        <p>{`₹${totalExpense}`}</p>
      </div>
    </div> */}
    <div className="rupee-logo">
    <img src={order} alt="order logo"
    style={{ width: '100px', height: '100px' }} />
      </div>
      <div className="some-content">
      Orders<br/>
      <h3>$2.4k</h3>
        <p className='para'>
        <span className="red-arrow">&#x2193;2%</span> this month
        </p>
      </div>
    </div>
  );
};

export default ExpenseTracker2;
