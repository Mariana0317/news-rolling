import React from "react";

const MonedaValor = (props) => {
  console.log(props.moneda);
  return (
    <div className="d-md-flex flex-column px-2 py-1 col-3 d-none mt-3 mb-3">
      <div className="border border-dark">
        <div className="text-center border-bottom border-dark w-100">
          <h5><strong>{props.moneda.nombre}</strong></h5>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-center w-50">
            <p><strong>Compra</strong></p>
            <span>$ {props.moneda.compra}</span>
          </div>
          <div className="text-center w-50">
            <p><strong>Venta</strong></p>
            <span>$ {props.moneda.venta}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonedaValor;
