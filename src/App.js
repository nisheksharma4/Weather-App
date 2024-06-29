import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f73c23c889360134a753d3c8f97a5fb0&units=metric`);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setError(null);
      } else {
        setWeatherData(null);
        setError(data.message);
      }
    } catch (err) {
      setWeatherData(null);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchForm fetchWeather={fetchWeather} />
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
