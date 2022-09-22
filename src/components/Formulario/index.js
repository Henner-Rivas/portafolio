import React from "react";
import './styles.scss'
const Formulario = () => {
  return (
    <div className="container_formulario">
      <form>
      <div className="grup__input">
        <input type="text" placeholder="Nombre"/>
        <input type="text" placeholder="Email" />
      </div>
      <input type="text" placeholder="Tema" />
       
       <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
      <input type="submit" value="Enviar mensaje"/>
    </form>
    </div>
  );
};

export default Formulario;
