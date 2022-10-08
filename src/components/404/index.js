import React, { useContext } from "react";
import { TbError404 } from "react-icons/tb";
import { ImSad2 } from "react-icons/im";

import "./styles.scss";
import { Context } from "../../context";

const Error404 = () => {
  const { mode } = useContext(Context);

  return (
    <div className={mode ? `container-404 dark ` : "container-404"}>
      <TbError404 className="icon-404" />
      <p>
        {" "}
        <ImSad2 /> Esta pagina no esta disponible
      </p>
    </div>
  );
};

export default Error404;
