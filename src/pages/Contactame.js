import React, { useContext } from "react";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { Context } from "../context";
import "../styles/contactame.scss";
import Formulario from "../components/Formulario";
const Contactame = () => {
  const { mode } = useContext(Context);

  return (
    <div
      className={mode ? "container-contactame dark" : "container-contactame"}
    >
      <div
        className={
          mode ? "encabezado__cantactanos dark" : "encabezado__cantactanos"
        }
      >
        <div className="container__titulo">
          <h3>Contactame</h3>
        </div>
        <div className="texto">
          <h3> ¿Tienes alguna pregunta?</h3>
          <h5> Estoy a tu servicio</h5>
        </div>
        <div className="icons">
          <div className="item">
            <AiFillPhone className="icon" />
            <h6>Llamane</h6>
            <p> +57 3225885033</p>
          </div>
          <div className="item">
            <GoLocation className="icon" />
            <h6>Ubicación</h6>
            <p> Flores de buenaños, Quibdo -colombia</p>
          </div>
          <div className="item">
            <AiFillLinkedin className="icon" />
            <h6>linkedin</h6>
            <p>www.linkedin.com/in/henner-rivas</p>
          </div>
          <div className="item">
            <MdEmail className="icon" />

            <h6>Email</h6>
            <p>berrio320683@gmail.com</p>
          </div>
        </div>

        <div className="texto">
          <h3>Enviame un email o llena este formulario</h3>
          <h5> Seria un placer responder tu mensaje</h5>
        </div>
      </div>
      <Formulario />
    </div>
  );
};

export default Contactame;
