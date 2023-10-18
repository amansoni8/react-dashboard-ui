import React from 'react';
import './ExpenseTracker.css'; // Import the CSS file for styling
import './YourComponent.css';
import PieChart from './piechart';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

const ExpenseTracker5 = ({ totalExpense }) => {
  return (
    <div className="expense-tracker5">
     <p className='customer'><b>Customers</b><br/>Customers that buy products
    <PieChart percentage={150} />
    </p>
    </div>
  );
};

export default ExpenseTracker5;

