import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faRecycle, faUsers } from "@fortawesome/free-solid-svg-icons";

const Caracteristicas = () => {
    return (
        <div className="row display-inline container mt-5">
            <div className="d-flex flex-column text-center col-sm-12 col-md-6 col-lg-3">
                <div className="rounded-circle d-flex justify-content-center align-items-between mt-3">
                    <FontAwesomeIcon icon={faEye} size="4x" />
                </div>
                <h2 className="mb-1">Atención</h2>
                <hr className="col-1"/>
                <p>Estamos comprometidos al 100% para hacer que nuestros sitios sean de la mejor manera que puedan ser, no importa lo que sea necesario para llegar a eso.</p>
            </div>
            <div className="d-flex flex-column text-center col-sm-12 col-md-6 col-lg-3">
                <div className="rounded-circle d-flex justify-content-center align-items-between mt-3">
                    <FontAwesomeIcon icon={faHeart} size="4x" />
                </div>
                <h2 className="mb-1">Pasión</h2>
                <hr className="col-1"/>
                <p>Nuestro deseo de hacer un buen trabajo es muy profundo, eso nos hace manejar cada proyecto con energía fresca y entusiasmo</p>
            </div>
            <div className="d-flex flex-column text-center col-sm-12 col-md-6 col-lg-3">
                <div className="rounded-circle d-flex justify-content-center align-items-between mt-3">
                    <FontAwesomeIcon icon={faRecycle} size="4x" />
                </div>
                <h2 className="mb-1">Empatía</h2>
                <hr className="col-1"/>
                <p>Mientras compartimos nuestro conocimiento y experiencia, los escuchamos atentamente para entender sus negocios y sus necesidades.</p>
            </div>
            <div className="d-flex flex-column text-center col-sm-12 col-md-6 col-lg-3">
                <div className="rounded-circle d-flex justify-content-center align-items-between mt-3">
                    <FontAwesomeIcon icon={faUsers} size="4x" />
                </div>
                <h2 className="mb-1">Trabajo en equipo</h2>
                <hr className="col-1"/>
                <p>Estamos unidos a usted en el impulso de sacar lo mejor de su proyecto, piense en nosotros como miembros extra de su equipo con todas las habilidades que necesites.</p>
            </div>
        </div>
    );
};

export default Caracteristicas;