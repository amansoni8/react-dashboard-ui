import React from 'react';
import './Activity.css'; // Import the CSS file for styling

const Activity = ({ activity, image }) => {
  return (
    <div className="activity-container">
      <div className="activity-image">
        <img src={image} alt="Activity" />
      </div>
      <div className="activity-details">
        <h2>{activity}</h2>
        {/* Additional activity details can be displayed here */}
      </div>
    </div>
  );
};

export default Activity;
