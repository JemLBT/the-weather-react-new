import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description} </li>
        </ul>

        <div className="row">
          <div className="col-8">
            <span className="iconWeather">
              <WeatherIcon code={props.data.icon} size={80} />
            </span>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <ul>
              <li>
                <strong>Pressure:</strong> {props.data.pressure}
              </li>
              <li>
                <strong>Humidity: </strong>
                {props.data.humidity} %
              </li>
              <li>
                <strong>Wind: </strong>
                {Math.round(props.data.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
