import React from 'react';
import CardClima from './CardClima/CardClima';
import MonedasValores from './MonedaApi/MonedasValores';
import NoticiasDestacadas2 from './noticiasDestacadas/NoticiasDestacadas2';

const Inicio = () => {
    return (
        <div>
            <CardClima></CardClima>
            <MonedasValores></MonedasValores>
            <NoticiasDestacadas2></NoticiasDestacadas2>
            <section className="container d-flex">
                <div className="col-9 border border-dark">
                    fsdfsfsdfsdfsdf
                </div>
                <div className="col-3 border border-dark">

                </div>
            </section>
        </div>
    );
};

export default Inicio;