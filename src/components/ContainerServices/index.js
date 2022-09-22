import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { FaDisease } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";
import { SiPerforce } from "react-icons/si";

import "./styles.scss";
const ContainerServices = () => {
  return (
    <div className="contianer_card_servicies">
      <div className="service">
        <GiSmartphone className="icon" />
        <h5>Fully resposive</h5>
        <p>
          Tu sitio web trendra la capacidad de adaptarse a cualquier dispositivo
          por ejemplo computador, tables y celulares moviles{" "}
        </p>
      </div>
      <div className="service">
        <FaDisease className="icon" />
        <h5>Diseño creativo</h5>
        <p>
          Un buen y atractivo diseño web te ayuda a mantener al margen el sitio,
          que es la cara digital de tu negocio o empresa{" "}
        </p>
      </div>
      <div className="service">
        <BiCodeAlt className="icon" />
        <h5>Desarrollo</h5>
        <p>
          Conozco la importancia del diseño web y puedo ayudarte a crear un
          sitio web que te encantará.
        </p>
      </div>

      <div className="service">
        <AiFillLike className="icon" />
        <h5>Integración de redes sociales</h5>
        <p>
          Existen muchas plataformas sociales, y debe promocionar su presencia
          en ellas en su sitio web
        </p>
      </div>

      <div className="service">
        <CgPerformance className="icon" />
        <h5>Rendimiento</h5>
        <p>
          Retener a los usuarios es crucial para mejorar las conversiones, los
          sitios de alto rendimiento atraen y retienen a los usuarios{" "}
        </p>
      </div>

      <div className="service">
        <SiPerforce className="icon" />
        <h5>SEO</h5>
        <p>
          Optimizaré su sitio con una estrategia inteligente de optimización de
          motores de búsqueda para generar clientes potenciales
        </p>
      </div>
    </div>
  );
};

export default ContainerServices;
