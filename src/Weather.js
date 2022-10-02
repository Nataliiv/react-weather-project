import React, { useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	let [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData ({
			ready: true,
			city: response.data.name,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
			description: response.data.weather[0].description,
			country: response.data.sys.country,
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
		const apiKey = "3743a596ca777c1b75d0b29a0dd4cdfd";
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
                className="form-control"
                autoFocus="on"
								onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <div className="weatherInfo">
          <div className="row">
            <div className="col-6">
              <div className="d-flex">
                <div>
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                  />
                </div>
                <div>
                  <span className="temperature">{Math.round(weatherData.temperature)}</span>
                  <span className="unit">°C | °F</span>
                </div>
              </div>
              <div className="description">
                <span className="me-3">Humidity: {weatherData.humidity}%</span>
                <span>Wind: {weatherData.wind} km/h</span>
              </div>
            </div>
            <div className="col-6 citySearch">
              <h1>{weatherData.city}, {weatherData.country}</h1>
              <ul>
                <li>Saturday 18:00</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
	} else {
		search();
		return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#8ef6e4"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
	}
  
}