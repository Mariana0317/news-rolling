/*import React from "react";
import { useParams } from "react-router-dom";
import db from "../../db.json";

const Notice = () => {
  const { id } = useParams();

  const renderNotice = db.find((item) => {
    return item.id === id;
  });

  const notice = () => {
    return (
        <div>
          <h1 className="text-center my-5">{renderNotice.titulo}</h1>
          <h3 className="ml-5 my-4"></h3>
          <img src={renderNotice.img} alt={renderNotice.titulo} className="img-fluid"></img>
          <p className="ml-5 my-4">{renderNotice.texto}</p>
        </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">{notice()}</div>
    </div>
  );
};

export default Notice;
*/