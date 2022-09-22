import React from "react";
import "./styles.scss";

import { AiFillGithub } from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";

const CardPortafolio = ({ proyecto }) => {
  let { nombre, hechaCon, descricion, image, LinkEnWeb, LinkRepositorio } =
    proyecto;

  return (
    <div className="container__card"> 
    <div> 
      <h3 className="titulo">{nombre}</h3>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="" />
          </div>
          <div className="flip-card-back">
            <div id="img"></div>
            <div className="container-texto">
              <h3> {hechaCon} </h3>
              <p>{descricion}</p>
              <div className="icons">
                {LinkEnWeb && (
                  <a href={LinkEnWeb} target="_blank" rel="noopener noreferrer">
                    <BiNavigation className="icon" title="Ir al proyecto publicado" />
                  </a>
                )}

                {LinkRepositorio && (
                  <a
                    href={LinkRepositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="icon" title="Ir al repositorio" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardPortafolio;
