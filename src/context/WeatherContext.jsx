
import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (searchLocation) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${searchLocation}&days=7`);
      const data = await response.json();
      setWeatherData(data.current);
      setForecast(data.forecast.forecastday);
      setLocation(data.location);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{
      weatherData,
      forecast,
      location,
      loading,
      error,
      fetchWeather
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);
