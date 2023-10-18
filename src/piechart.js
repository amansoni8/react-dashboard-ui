import React from 'react';
import './PieChart.css'; // Import the CSS file for styling
import piechart from './icons/piechart.png';

const PieChart = ({ percentage }) => {
  const sliceStyle = {
    transform: `rotate(${percentage * 3.6}deg)`,
  };

  return (
    <div className="pie-chart">
  <img src={piechart} alt="piechart Logo" 
    style={{ width: '200px', height: '200px' }}/>
</div>
  );
};

export default PieChart;
