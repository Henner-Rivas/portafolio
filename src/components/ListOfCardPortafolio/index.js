import React from "react";
import CardPortafolio from "../cardPortafolio";
const ListOfCardPortafolio = ({ proyectos }) => {
  console.log(
    "🚀 ~ file: index.js ~ line 4 ~ ListOfCardPortafolio ~ proyectos",
    proyectos
  );

  return (
    <div className="cards">
      {proyectos?.map((proyecto) => (
        <CardPortafolio proyecto={proyecto} key={proyecto.id} />
      ))}
    </div>
  );
};

export default ListOfCardPortafolio;
