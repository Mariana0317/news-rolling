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
  console.log(props.nos)
  return (
    <div className="d-flex col-md-5 ml-md-3 ml-0 shadow col-12 border pt-3 rounded mb-3">
      <div className="col-4">
        <img
          src={process.env.PUBLIC_URL + `${props.nos.img}`}
          className="img-fluid rounded-circle mb-3"
          alt="leo"
        />
      </div>
      <div className="col-8 text-left">
        <h6>{props.nos.nombre}</h6>
        <div className="w-100 d-flex">
          <a style={{ color: "#1DA1F2" }} href="https://twitter.com/" className="rounded-circle">
            <FontAwesomeIcon
              className="mr-2"
              icon={faTwitterSquare}
              size="2x"
            />
          </a>
          <a style={{ color: "#D42C7F" }} href="https://instagram.com/" className="rounded-circle">
            <FontAwesomeIcon
              className="mr-2"
              icon={faInstagramSquare}
              size="2x"
              href="https://instagram.com/"
            />
          </a>
          <a style={{ color: "#2977C9" }} href="https://www.linkedin.com/" className="rounded-circle">
            <FontAwesomeIcon className="mr-2" icon={faLinkedin} size="2x" />
          </a>
          <a style={{ color: "#24292E" }} href="https://www.github.com/" className="rounded-circle">
            <FontAwesomeIcon className="mr-2" icon={faGithub} size="2x" />
          </a>
        </div>
        <p><span className="badge badge-info">{props.nos.sm}</span></p>
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
