import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
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
								17 °C | °F
							</div>
							<ul>
								<li>Humidity: 61%</li>
								<li>Wind: 5 km/h</li>
							</ul>
						</div>
      		</div>
					<div className="col-6">
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