import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to={"/sections/actualidad"}>Actualidad</Link>
                <Link class="dropdown-item" to={"/sections/espectaculos"}>espectaculos</Link>
                <Link class="dropdown-item" to={"/sections/tecnologia"}>tecnologia</Link>
                <Link class="dropdown-item" to={"/sections/deportes"}>deportes</Link>
                <Link class="dropdown-item" to={"/sections/politica"}>politica</Link>
                <Link class="dropdown-item" to={"/sections/economia"}>economia</Link>
                <Link class="dropdown-item" to={"/sections/salud"}>salud</Link>
                <Link class="dropdown-item" to={"/sections/fotografia"}>fotografia</Link>
                <div class="dropdown-divider"></div>
               
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">

            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> 
        </>
    );
};

export default Navbar;