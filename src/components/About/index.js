import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import "./styles.scss";
import Typed from "typed.js";
import foto from "../../assets/fotoHenner.jpg";

const About = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const refTyped = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Ingeniero en telecomunicaciones e informatica",
        "Desarrollador fullstack",
        "Desarrollador frontend",
      ],
      typeSpeed: 70,
      backSpeed: 70,
    };

    // elRef refers to the <span> rendered below
    refTyped.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      setTimeout(() => {
        refTyped.current.destroy();
      }, 4000);
    };
  }, []);
  return (
    <div className="container-about">
      <div className="container header" id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <img src={foto} alt="" />
            </div>
          </div>
          <div className="right-header">
            <h1 className="title-name" id="machine">
              Hola, soy <span className="name"> Henner Rivas Berrio</span>
              <div className="type-wrap">
                <span ref={el} />
              </div>
            </h1>
            <p>
              Soy desarrollador web, me encanta crear sitios web funcionales,
              estoy listo para asumir su proyecto. Te mereces un sitio web
              creado teniendo en cuenta la seguridad, capacidad de respuesta y
              eficiencia puedo crear una aplicación desde cero o continuar con
              código existente con facilidad.
            </p>
            <div className="main-btn">
              <a href="./pages/pdf" target="_blank">
                <div className="btn-text">
                  <AiOutlineDownload fontSize="30px" />
                  Download CV
                </div>
              </a>

              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
