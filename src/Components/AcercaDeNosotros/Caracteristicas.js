import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Caracteristicas = () => {
    return (
        <div className="d-flex flex-column text-center col-3">
            <div className="border rounded-circle d-flex justify-content-center align-items-center mb-3" style={{height:"250px"}}>
            <FontAwesomeIcon icon={faAward} size="5x" />
            </div>
            <h2 className="mb-1">Focus</h2>
            <hr className="col-3 mb-4"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod laborum illum necessitatibus ipsum reiciendis voluptatibus iusto unde enim voluptas incidunt consequuntur, sint sequi esse laboriosam? Voluptatem aspernatur nisi quisquam.</p>
        </div>
    );
};

export default Caracteristicas;