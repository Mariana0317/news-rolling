import React, {useState, useEffect} from "react";
import NoticiaDestacada from "./NoticiaDestacada";
import NoticiaDestacadaSmall from "./NoticiaDestacadaSmall";
import "./NoticiasDestacadas.css";

const NoticiasDestacadas = (props) => {
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);

  useEffect(() => {
    if (props.noticiasDestacadas !== undefined) {
      setNoticiasDestacadas(props.noticiasDestacadas);
    }
  }, [props.noticiasDestacadas]);


  return (
    <div className="d-flex flex-column flex-lg-row noticias-destacadas mb-3 px-1 px-md-0">
      <div className="col-lg-8 col-12 mb-2 mb-lg-0 p-0 m-0 mr-lg-2 rounded shadow">
        <NoticiaDestacada
          noticiasDestacadas={noticiasDestacadas[0]}
        ></NoticiaDestacada>
      </div>
      <div className="col-lg-4 col-12 d-flex flex-column flex-md-row flex-lg-column px-1 px-md-0">
        <div className="h-md-50 h-100 mb-2 p-0 rounded shadow">
          <NoticiaDestacadaSmall
            noticiasDestacadas={noticiasDestacadas[1]}
          ></NoticiaDestacadaSmall>
        </div>
        <div className="h-md-50 h-100 rounded shadow ">
          <NoticiaDestacadaSmall
            noticiasDestacadas={noticiasDestacadas[2]}
          ></NoticiaDestacadaSmall>
        </div>
      </div>
    </div>
  );
};

export default NoticiasDestacadas;
