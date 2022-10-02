import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-4">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
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
								<img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" />
							</div>
							<div>
								<span className="temperature">17</span>
								<span className="unit">°C | °F</span> 
							</div>					
						</div>
						<div className="description">
							<span className="me-3">Humidity: 61%</span>
							<span>Wind: 7 km/h</span>
						</div>
      		</div>
					<div className="col-6 citySearch">
						<h1>London, UK</h1>
						<ul>
							<li>Saturday 18:00</li>
							<li>Few Clouds</li>
						</ul>
					</div>
				</div>
			</div>
    </div>
  );
}