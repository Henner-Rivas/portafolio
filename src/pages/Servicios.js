import React, { useContext } from "react";
import ContainerServices from "../components/ContainerServices";
import { Context } from "../context";
import "../styles/Servicios.scss";
const Servicios = () => {
  const { mode } = useContext(Context);

  return (
    <div className={`container-services ${mode ? "dark" : ""}`}>
      <div className="container__titulo">
        <h3>Mis servicios </h3>
      </div>

      <ContainerServices />
    </div>
  );
};

export default Servicios;
