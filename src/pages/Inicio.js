import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import About from "../components/About";
import Habilidades from "../components/Habilidades";
import { Context } from "../context";

const Inicio = () => {
  const { mode } = useContext(Context);

  return (
    <>
      <Helmet>
        <title> Henner Rivas Berrio - Full Stack Developer </title>

        <meta
          name="descripcion"
          content="Henner Rivas Berrio, es un Full Stack Developer e Ingeniero en telecomunicaciones e informatica"
        />
      </Helmet>

      <div className={mode ? "container_inicio dark" : "container_inicio"}>
        <About />

        <Habilidades />
      </div>
    </>
  );
};

export default Inicio;
