import React, { useEffect, useState } from "react";
import MonedaValor from "./MonedaValor";

const MonedasValores = () => {
    const [dolarOficial, setDolarOficial]  = useState({});
    const [dolarBlue, setDolarBlue]  = useState({});
    const [dolarBolsa, setDolarBolsa]  = useState({});
    const [dolarTurista, setDolarTurista]  = useState({});
  useEffect(() => {
    ApiRequest();
  }, []);

  const ApiRequest = async () => {
    const requestApi = await fetch(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    const responseApi = await requestApi.json();
    setDolarOficial(responseApi[0].casa);
    setDolarBlue(responseApi[1].casa);
    setDolarBolsa(responseApi[4].casa);
    setDolarTurista(responseApi[6].casa);
  };

  return (
    <div className="container mx-auto row">
      <MonedaValor moneda={dolarOficial}></MonedaValor>
      <MonedaValor moneda={dolarBlue}></MonedaValor>
      <MonedaValor moneda={dolarBolsa}></MonedaValor>
      <MonedaValor moneda={dolarTurista}></MonedaValor>
    </div>
  );
};

export default MonedasValores;
