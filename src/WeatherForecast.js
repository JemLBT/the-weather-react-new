import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "10588b3do607b336f1e63a30b7f6ft4a";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}}&lon=${longitude}&appid=${apiKey}
`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="few-clouds-day" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19</span>
            <span className="WeatherForecast-temperature-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
