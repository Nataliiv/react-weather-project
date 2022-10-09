import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
    <div className="WeatherForecast">
      <div className="row">
				{forecast.map(function(day, index) {
					if (index < 5) {
						return <div className="col" key={index}>
          <WeatherForecastDay data={day} />
        </div>
					} else {
						return null;
					};
				})}
      </div>
    </div>
  ); 
	} else {
		let apiKey = "bf54175800a55e59e6c4d6461deeef12";
		let units = "metric";
		let latitude = props.coordinates.lat;
		let longitude = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}