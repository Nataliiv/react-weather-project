import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={56} />
            </div>
            <div>
              <span className="temperature">{Math.round(props.data.temperature)}</span>
              <span className="unit">
                °C 
              </span>
            </div>
          </div>
          <div className="description">
            <span className="me-3">Humidity: {props.data.humidity}%</span>
            <span>Wind: {props.data.wind} km/h</span>
          </div>
        </div>
        <div className="col-6 citySearch">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );  
}