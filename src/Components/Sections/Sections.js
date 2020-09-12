import React from 'react';
import db from '../../db.json';
import {Link, useParams} from 'react-router-dom'
const Sections = () => {
let {category} = useParams()

const dbFilter = db.filter(item => { 
    return item.categoria === category
})

const mapNotice = dbFilter.map(item => {
        return <div className="col-4 mb-4">
        <div class="card" >
            <img src={item.img} class="card-img-top" alt="..." />
            <div class="card-body">
<h5 class="card-title">{item.titulo}</h5>
<p class="card-text" style={{height: "100px",
    overflow: "hidden",}}>{item.texto}</p>
<Link to={`/sections/${item.categoria}/${item.id}`} class="btn btn-primary">ver mas</Link>
            </div>
        </div>
    </div>
} )


    return (
        <>
            <div className="container text-center">
    <h1 className="mt-5">{category.toUpperCase()}</h1>
                <div className="row mt-4">
                 {mapNotice}
                    
                    </div>

            </div>

        </>
    );
};

export default Sections;