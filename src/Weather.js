import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	let [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
    });
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	function search() {
		const apiKey = "bf54175800a55e59e6c4d6461deeef12";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	if (weatherData.ready) {
		return (
      <div className="Weather">
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <footer>
          This project was coded by{" "}
          <a
            href="https://jazzy-melba-46dc0a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nataliia Ivanchak
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Nataliiv/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    );
	} else {
		search();
		return "Loading the page"
	};
}