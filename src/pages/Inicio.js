import React, { useContext, useEffect } from "react";
import About from "../components/About";
import Habilidades from "../components/Habilidades";
import { Context } from "../context";

const Inicio = () => {
  const { mode } = useContext(Context);

  return (
    <div className={mode ? "container_inicio dark" : "container_inicio"}>
      <About />

      <Habilidades />
    </div>
  );
};

export default Inicio;
