import React from "react";

const MonedaValor = () => {
  return (
    <div className="d-flex flex-column px-2 py-1 col-3">
      <div className="border border-dark">
        <div className="text-center border-bottom border-dark w-100">
          <h4>Dolar Oficial</h4>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-center w-50">
            <h5>Venta</h5>
            <h5>$ 0,0</h5>
          </div>
          <div className="text-center w-50">
            <h5>Venta</h5>
            <h5>$ 0,0</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonedaValor;
