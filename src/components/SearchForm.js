import React, { useState } from 'react';

const SearchForm = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
        required 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
