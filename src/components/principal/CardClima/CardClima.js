import React, { useEffect, useState } from "react";
import "./CardClima.css";

const CardClima = () => {
  const [dates, setDates] = useState({
    date: "",
    hours: "",
  });
  
  const [located, setLocated] = useState("");

  useEffect(() => {
    ApiRequest();
  }, []);

  const ApiRequest = async () => {
    const requestApi = await fetch("http://ip-api.com/json");
    const responseApi = await requestApi.json();
    setLocated(responseApi.city);
    console.log(responseApi.city);
  };

  window.setInterval(() => {
    const dateJs = new Date();
    const dateCall =
      dateJs.getDate() +
      "/" +
      (dateJs.getMonth() + 1) +
      "/" +
      dateJs.getFullYear();
    const hoursCall = dateJs.getHours() + ":" + dateJs.getMinutes();
    setDates({ date: dateCall, hours: hoursCall });
  });

  return (
    <div className="card-clima border border-dark col-4 p-0 my-3">
      <div className="w-100 border border-dark h-100 d-flex">
        <div className="col-5 border border-dark d-flex justify-content-center align-items-center">
          <h2 className="my-auto display-4">{dates.hours}</h2>
        </div>
        <div className="col-4 border border-dark d-flex flex-column justify-content-center align-items-center">
          <p className="m-0 h4">{located}</p>
          <p className="m-0 h6">{dates.date}</p>
        </div>
        <div className="col-3 border border-dark d-flex flex-column justify-content-center align-items-center">
          <p>qwe</p>
        </div>
      </div>
    </div>
  );
};

export default CardClima;
