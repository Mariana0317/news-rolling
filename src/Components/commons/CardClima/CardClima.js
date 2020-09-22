import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./CardClima.css";

const CardClima = () => {
  const [located, setLocated] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    ApiRequest();
  }, []);

  const ApiRequest = async () => {
    const requestApi = await fetch("http://ip-api.com/json");
    const responseApi = await requestApi.json();
    setLocated(responseApi);
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${responseApi.city},${responseApi.countryCode}&appid=a27847aac3dab2bcb81154f5a2bc6868&units=metric`
    );
    const responseWeather = await url.json();
    setWeather(responseWeather);
  };

  window.setInterval(() => {}, 600000);

  window.setInterval(() => {
    const dateCall = new Date().toLocaleDateString();
    const hoursCall =
      (new Date().getHours() < 10
        ? "0" + new Date().getHours()
        : new Date().getHours()) +
      ":" +
      (new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes());
        

    ReactDOM.render(hoursCall, document.getElementById("hours"));
    ReactDOM.render(dateCall, document.getElementById("date"));
  }, 1000);

  return (
    <div id="top">
    <div className="text-light card-clima col-12 justify-content-between d-none d-lg-block">
      <div className="w-100 h-100 d-flex">
        <div className="col-4 d-column justify-content-start align-self-center">
          <h2 className="text-center text-light" id="hours">...</h2>
          <p className="text-center mb-1" id="date">Cargando...</p>
        </div>
        <div className="wheather col-4 d-flex flex-column justify-content-around align-items-center">
          <p className="m-0">{located.city}</p>
        </div>
        <div className="wheather col-4 d-flex justify-content-center align-items-center">
          {weather.weather ? (
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Wheather"
              className="ml-3"
            ></img>
          ) : null}
          <p className="pt-2">{weather.weather ? weather.main.temp + " °C" : null}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardClima;
