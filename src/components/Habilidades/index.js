import React from "react";
import javaScript from "../../assets/javaScript.png";
import Redux from "../../assets/Redux.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Php from "../../assets/php.png";
import Sass from "../../assets/sass.jpg";
import reactLogo from "../../assets/React.png";
import Mysql from "../../assets/MySQL.png";
import Node from "../../assets/Node.png";
import wordpress from "../../assets/wordpress.png";
import git from "../../assets/git.png";
import githup from "../../assets/github.png";
import angular from "../../assets/angular.png";
import figma from "../../assets/figma.png";
import material from "../../assets/material-ui.png";
import jquery_logo from "../../assets/jquery_logo.png";
import nextjs from "../../assets/nextjs.png";
import ts_logo from "../../assets/ts_logo.png";
import { Fade } from "react-awesome-reveal";

import "./styles.scss";

const Habilidades = () => {
  return (
    <>
      <div className={"container__carrucel "}>
        <div className="container__titulo">
          <h3>Tecnologias con las que he trabajado</h3>
        </div>
        <Fade cascade direction={"left"} className="carrusel">
          <div className="carrusel-items">
            <div className="carrusel-item">
              <img src={javaScript} alt="JavaScript" title="JavaScript" />
            </div>
            <div className="carrusel-item">
              <img src={Html} alt="html" title="HTML" />
            </div>
            <div className="carrusel-item">
              <img src={Css} alt="CSS" title="CSS" />
            </div>
            <div className="carrusel-item">
              <img src={Redux} alt="Redux" title="Redux" />
            </div>
            <div className="carrusel-item">
              <img src={material} alt="Material UI" title="Material UI" />
            </div>
            <div className="carrusel-item">
              <img src={githup} alt="Github" title="Github" />
            </div>
            <div className="carrusel-item">
              <img src={nextjs} alt="Next.js" title="Next.js" />
            </div>
            <div className="carrusel-item">
              <img src={angular} alt="Angular" title="Angular" />
            </div>
            <div className="carrusel-item" title="Git">
              <img src={git} alt="Git" />
            </div>
            <div className="carrusel-item">
              <img src={Sass} alt="Sass" title="Sass" />
            </div>

            <div className="carrusel-item">
              <img src={Node} alt="Node.js" title="Node.js" />
            </div>
            <div className="carrusel-item">
              <img src={jquery_logo} alt="Jquery" title="Jquery" />
            </div>
            <div className="carrusel-item">
              <img src={reactLogo} alt="React" title="React" />
            </div>
            <div className="carrusel-item">
              <img src={ts_logo} alt="Typescript " title="Typescript" />
            </div>
            <div className="carrusel-item">
              <img src={Php} alt="PHP" title="PHP" />
            </div>
            <div className="carrusel-item">
              <img src={Sass} alt="Sass" title="Sass" />
            </div>
            <div className="carrusel-item">
              <img src={Bootstrap} alt="Bootstrap" title="Bootstrap" />
            </div>
            <div className="carrusel-item">
              <img src={wordpress} alt="Wordpress" title="Wordpress" />
            </div>
            <div className="carrusel-item">
              <img src={Mysql} alt="Mysql" title="Mysql" />
            </div>
            <div className="carrusel-item">
              <img src={figma} alt="Figma" title="Figma" />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default React.memo(Habilidades);
