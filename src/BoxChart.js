import React from 'react';
import './BoxChart.css'; // Import the CSS file for styling

const VerticalProgressBarChart = ({ data }) => {
  return (
    
    <div class='barcontainer'>
  <p className='view'><b>Overview</b><br/>Monthly Income</p>
        <div class='bar' style={{height:'12%'}}>
            
            {/* <div class='barlabel'>
            label
            </div> */}
        </div>
        
        <div class='bar' style={{height:'22%'}}>
            
            {/* <div class='barlabel'>
            label
            </div> */}
            
        </div>
        <div class='bar' style={{height:'30%'}}>
           
            {/* <div class='barlabel'>
            label </div>*/}
        </div> 
        <div class='bar' style={{height:'85%'}}>
           
            {/* <div class='barlabel'>
            label
            </div> */}
        </div>
        <div class='bar' style={{height:'45%'}}>
           
            {/* <div class='barlabel'>
            label
            </div> */}
        </div>
        <div class='bar' style={{height:'50%'}}>
           
            {/* <div class='barlabel'>
            label
            </div> */}
        </div>
        
       
    </div>

  );
};

export default VerticalProgressBarChart;
