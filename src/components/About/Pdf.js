import React, { useEffect } from "react";

const Pdf = () => {
  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
    }
  }, []);
  return (
    <div className="container-pdf">
      <object
        data={require("../../docs/Henner Rivas Berrio curriculum.pdf")}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <br />
        <a
          href={require("../../docs/Henner Rivas Berrio curriculum.pdf")}
          id="enlaceDescargarPdf"
          download="Henner Rivas Berrio curriculum.pdf"
        >
          Tu dispositivo no puede visualizar los PDF, da click aquí para
          descargarlo
        </a>
      </object>
    </div>
  );
};

export default Pdf;
