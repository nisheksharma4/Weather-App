const WeatherDisplay = ({ weatherData }) => {
    const { name, main, weather } = weatherData;
  
    return (
      <div>
        <h2>{name}</h2>
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Condition: {weather[0].description}</p>
        <img 
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} 
          alt={weather[0].description} 
        />
      </div>
    );
  };
  
  export default WeatherDisplay;
  