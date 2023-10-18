import React from 'react';
import './TableLayout.css'; // Import the CSS file for styling
import BoxChart from './BoxChart';
import ExpenseTracker5 from './expenseTracker5';


const TableLayout = () => {
  return (
    <div className="table-layout">
      <div className="column">
        <table className="data-table">
        <BoxChart data={[50, 80, 30, 90, 60,80,90]} />
        </table>
      </div>
      
      <div className="column"> 
        <table className="data-table">
          <ExpenseTracker5/>
        </table>
      </div>
    </div>

  );
};

export default TableLayout;
