import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <img
      src="https://raw.githubusercontent.com/shannonhochkins/weather-icons-animated/refs/heads/main/output.gif"
      alt={props.alt}
    ></img>
  );
}
