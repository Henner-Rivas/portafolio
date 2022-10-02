import React, { useState } from "react";
import { sendMail } from "../../helpers/Mail";
import useInputValue from "../../hooks/useInputValue";
import "./styles.scss";
const Formulario = () => {
  const [nombre, onChangeNombre] = useInputValue("");
  const [email, onChangeEmail] = useInputValue("");
  const [asunto, onChangeAsunto] = useInputValue("");
  const [mensaje, onChangeMensaje] = useInputValue("");
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);

  /* form submit */
  let datos = {
    name: nombre,
    email,
    asunto,
    mensaje,
  };
  console.log(datos);
  const formSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !asunto || !mensaje) {
      setError(true);
      return;
    }

    sendMail(datos).then((data) => {
      if (data.err) {
        console.log(data.err);
      } else {
        setSend(true);
        /*
         */ setTimeout(() => {
          setSend(false);
        }, 1500);
        resetForm();
      }
    });
    /*       .catch(console.log("any error"));
     */
    function resetForm() {
      onChangeNombre();
      onChangeAsunto();
      onChangeMensaje();
      onChangeEmail();
    }
  };
  return (
    <div className="container_formulario">
      <form onSubmit={formSubmit}>
        <div className="grup__input">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => onChangeNombre(e)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Asunto"
          value={asunto}
          onChange={onChangeAsunto}
          required
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={mensaje}
          placeholder="Mensaje"
          onChange={onChangeMensaje}
          required
        ></textarea>
        <input type="submit" value="Enviar mensaje" />
      </form>
    </div>
  );
};

export default Formulario;
