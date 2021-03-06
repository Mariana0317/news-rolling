import React from "react";

const MonedaValor = (props) => {
  return (
    <div className="d-lg-flex flex-column px-2 py-1 col-3 d-none d-lg-block mt-5 mb-3" >
      <div className="border border-dark">
        <div className="moneda text-center border-bottom border-dark w-100 p-1">
          <h5><strong>{props.moneda.nombre}</strong></h5>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-center w-50 mb-2">
            <p><strong>Compra</strong></p>
            <span><strong>$</strong>{props.moneda.compra}</span>
          </div>
          <div className="text-center w-50 mb-2">
            <p><strong>Venta</strong></p>
            <span><strong>$</strong> {props.moneda.venta}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonedaValor;
