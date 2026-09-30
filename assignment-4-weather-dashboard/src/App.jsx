import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const searchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(
            "API key is not active yet. Please wait and try again."
          );
        }

        if (response.status === 404) {
          throw new Error(
            "City not found. Please check the city name."
          );
        }

        throw new Error("Something went wrong. Please try again.");
      }

      const data = await response.json();

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="app">
      <div className="weather-container">

        <h1>🌤️ Weather Dashboard</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchWeather();
              }
            }}
          />

          <button onClick={searchWeather}>
            Search
          </button>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather...</p>
          </div>
        )}

        {error && (
          <div className="error">
            ❌ {error}
          </div>
        )}

        {weather && !loading && (
          <div className="weather-card">

            <h2>
              {weather.name}, {weather.sys.country}
            </h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="weather-icon"
            />

            <h3>
              {Math.round(weather.main.temp)}°C
            </h3>

            <p className="description">
              {weather.weather[0].description}
            </p>

            <div className="weather-info">

              <div className="info-box">
                <span>🌡️</span>
                <p>Temperature</p>
                <strong>
                  {Math.round(weather.main.temp)}°C
                </strong>
              </div>

              <div className="info-box">
                <span>💧</span>
                <p>Humidity</p>
                <strong>
                  {weather.main.humidity}%
                </strong>
              </div>

              <div className="info-box">
                <span>💨</span>
                <p>Wind Speed</p>
                <strong>
                  {weather.wind.speed} m/s
                </strong>
              </div>

              <div className="info-box">
                <span>🌅</span>
                <p>Sunrise</p>
                <strong>
                  {formatTime(weather.sys.sunrise)}
                </strong>
              </div>

              <div className="info-box">
                <span>🌇</span>
                <p>Sunset</p>
                <strong>
                  {formatTime(weather.sys.sunset)}
                </strong>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;