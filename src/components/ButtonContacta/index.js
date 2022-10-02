import React from "react";
import { Bounce } from "react-awesome-reveal";
import "./styles.scss";
const ButtonContacta = () => {
  return (
    <Bounce triggerOnce={true} damping={1} duration={3000} delay={200}>
      <button className="buttonContactame"> Contactame</button>
    </Bounce>
  );
};

export default ButtonContacta;
