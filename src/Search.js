import React, { useState } from 'react';
import './SearchComponent.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    alert(`You searched for: ${query}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="search here.."
        value={query}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}> <button className='but'> <span><FontAwesomeIcon icon={faSearch} /></span></button></button>
    </div>
  );
};

export default SearchComponent;
