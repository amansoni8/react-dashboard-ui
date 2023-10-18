import React from 'react';
import './ThreeColumnTable.css'; // Import the CSS file for styling
import ExpenseTracker from './expenseTracker';
import ExpenseTracker2 from './expenseTracker2';
import ExpenseTracker3 from './expenseTracker3';
import ExpenseTracker4 from './expenseTracker4';
import SearchComponent from './Search';

const ThreeColumnTable = () => {
  return (
    <div className="table-container">
      <table className="three-column-table">
        <tbody>
        <tr>
         
            <td>
              <h3 className='hello'>Hello Shahrukh<span>&#x1F44B;</span></h3>
            </td>
            <td>
            
            </td>
            <td></td>

            <td>
            <SearchComponent/>
            </td>
          </tr>
          <tr>
            <td>
              <ExpenseTracker/>
            </td>
            <td>
              <ExpenseTracker2/>
            </td>
            <td>
            <ExpenseTracker3/>
            </td>
            <td>
            <ExpenseTracker4/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ThreeColumnTable;
