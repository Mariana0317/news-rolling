import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const Nosotros = (props) => {
  return (
    <div className="d-flex flex-column align-items-center col-12 col-md-5 ml-md-3 shadow border pt-3 rounded mb-3">
      <div>
        <img
          src={process.env.PUBLIC_URL + `${props.nos.img}`}
          className="img-fluid rounded-circle mb-3 nosotros"
          alt="leo"
        />
      </div>
      <div className="col-12 text-left d-flex flex-column align-items-center">
        <h6>{props.nos.nombre}</h6>
        <div className="w-100 d-flex justify-content-center">
          <a style={{ color: "#1DA1F2" }} href={props.nos.twitter} target="blank" className="rounded-circle">
            <FontAwesomeIcon
              className="mr-2"
              icon={faTwitterSquare}
              size="2x"
            />
          </a>
          <a style={{ color: "#D42C7F" }} href={props.nos.instagram} target="blank" className="rounded-circle">
            <FontAwesomeIcon
              className="mr-2"
              icon={faInstagramSquare}
              size="2x"
            />
          </a>
          <a style={{ color: "#2977C9" }} href={props.nos.linkedin} target="blank" className="rounded-circle">
            <FontAwesomeIcon className="mr-2" icon={faLinkedin} size="2x" />
          </a>
          <a style={{ color: "#24292E" }} href={props.nos.git} target="blank" className="rounded-circle">
            <FontAwesomeIcon className="mr-2" icon={faGithub} size="2x" />
          </a>
          <p><span className="badge badge-info">{props.nos.sm}</span></p>
        </div>
        <hr />
        <p className="font-weight-light">
          {props.nos.descripcion}
        </p>
        <hr />
        <div className="blockquote d-flex align-items-center">
          <FontAwesomeIcon className="mr-2" icon={faUserGraduate} size="1x" />
          <p className="m-0 ml-2">Rolling Code School</p>
        </div>
      </div>  
    </div>
  );
};

export default Nosotros;
