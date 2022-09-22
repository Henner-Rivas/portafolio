import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import useInputValue from "../../hooks/useInputValue";
import "./styles.scss";
const IconWhatsapp = () => {
  const [openButtonWhatsapp, setOpenButtonWhatsapp] = useState(false);
  const buttonWhatsapp = openButtonWhatsapp
    ? "is-active-whatsapp-popup"
    : false;
  const mensaje = useInputValue("");
  const handleClick = () => {
    let relmsg = mensaje.value.replace(/ /g, "%20");
    window.open(`https://wa.me/+573225885033?text=${relmsg}`, "_blank");
  };
  return (
    <div className="nav-bottom">
      <div className={`popup-whatsapp fadeIn ${buttonWhatsapp}`}>
        <div className="content-whatsapp -top">
          <button
            type="button"
            className="closePopup"
            onClick={() => setOpenButtonWhatsapp(!openButtonWhatsapp)}
          >
            <AiOutlineCloseCircle className="icon-font-color" />
          </button>

          <p> Hola, ¿como estas? ¿en que puedo ayudarle? escribeme.. </p>
        </div>
        <div className="content-whatsapp -bottom">
          <input
            className="whats-input"
            id="whats-in"
            type="text"
            placeholder="Escribir mensaje..."
            value={mensaje.value}
            onChange={(e) => mensaje.onChange(e)}
          />
          <button
            className="send-msPopup"
            id="send-btn"
            type="button"
            onClick={handleClick}
          >
            <FiSend fontSize="24px" className="icon-send" />
          </button>
        </div>
      </div>
      <button
        type="button"
        id="whats-openPopup"
        className="whatsapp-button"
        onClick={() => setOpenButtonWhatsapp(!openButtonWhatsapp)}
      >
        <div className="float">
          <BsWhatsapp className="my-float" />
        </div>
      </button>
      <div className="circle-anime"></div>
    </div>
  );
};

export default IconWhatsapp;
