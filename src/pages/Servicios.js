import React, { useContext } from "react";
import ContainerServices from "../components/ContainerServices";
import { Context } from "../context";
import "../styles/Servicios.scss";
import { Helmet } from "react-helmet-async";

const Servicios = () => {
  const { mode } = useContext(Context);

  return (
    <>
      <Helmet>
        <title> Servicios | Henner Rivas Berrio </title>
        <meta
          name="descripcion"
          content="Los servicios que ofresco son Desarrollo de paginas web y aplicaciones "
        />
      </Helmet>
      <div className={`container-services ${mode ? "dark" : ""}`}>
        <div className="container__titulo">
          <h3>Mis servicios </h3>
        </div>

        <ContainerServices />
      </div>
    </>
  );
};

export default Servicios;
