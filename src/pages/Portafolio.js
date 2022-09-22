import React, { useContext, useState, useMemo, useEffect } from "react";
import ListOfCardPortafolio from "../components/ListOfCardPortafolio";
import { Context } from "../context";
import "../styles/Portafolio.scss";
import proyectosdb from "../dbProyectos.json";
const Portafolio = () => {
  const [proyectos, setProyectos] = useState();
  console.log(
    "🚀 ~ file: Portafolio.js ~ line 8 ~ Portafolio ~ proyectos",
    proyectos
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortProyectos = {
    todo: "Todo",
    platzi: "Platzi",
    "e-commerce": "e-commerce",
    "landing-page": "Landing page",
    freelance: "Freelance",
    personal: "Personal",
  };

  const { mode } = useContext(Context);
  const [filter, setFilter] = useState(sortProyectos.todo);
  console.log(
    "🚀 ~ file: Portafolio.js ~ line 25 ~ Portafolio ~ filter",
    filter
  );
  const filterMemo = useMemo(() => {
    if (filter === sortProyectos.personal) {
      let personal = proyectosdb.filter((el) => {
        return el.category
          .toLowerCase()
          .includes(sortProyectos.personal.toLowerCase());
      });
      return personal;
    }
    if (filter === sortProyectos.platzi) {
      let platzi = proyectosdb.filter((el) => {
        return el.category
          .toLowerCase()
          .includes(sortProyectos.platzi.toLowerCase());
      });
      return platzi;
    }
    if (filter === sortProyectos.freelance) {
      let freelance = proyectosdb.filter((el) => {
        return el.category
          .toLowerCase()
          .includes(sortProyectos.freelance.toLowerCase());
      });
      return freelance;
    }
    if (filter === sortProyectos["e-commerce"]) {
      let commerce = proyectosdb.filter((el) => {
        return el.category
          .toLowerCase()
          .includes(sortProyectos["e-commerce"].toLowerCase());
      });
      return commerce;
    }
    if (filter === sortProyectos["landing-page"]) {
      let landingPage = proyectosdb.filter((el) =>
        el.category
          .toLowerCase()
          .includes(sortProyectos["landing-page"].toLowerCase())
      );
      return landingPage;
    }
    if (filter === sortProyectos.todo) {
      return proyectosdb;
    }
  }, [filter, sortProyectos]);

  useEffect(() => {
    setProyectos(filterMemo);
  }, [filterMemo]);
  return (
    <div
      className={mode ? "container__portafolio dark" : "container__portafolio"}
    >
      <div className="container_titulo_texto">
        <div className="container__titulo">
          <h3>Algunos de mis proyectos</h3>
        </div>

        <p>
          Estos son algunos de los proyectos en los que he trabajado, algunos
          personales y otros para empresas
        </p>

        <div className="container-category">
          <p onClick={() => setFilter(sortProyectos.todo)}>
            {sortProyectos.todo}{" "}
          </p>
          <p onClick={() => setFilter(sortProyectos.freelance)}>
            {sortProyectos.freelance}
          </p>
          <p onClick={() => setFilter(sortProyectos["landing-page"])}>
            {sortProyectos["landing-page"]}
          </p>
          <p onClick={() => setFilter(sortProyectos["e-commerce"])}>
            {sortProyectos["e-commerce"]}
          </p>
          <p onClick={() => setFilter(sortProyectos.personal)}>
            {sortProyectos.personal}
          </p>
          <p onClick={() => setFilter(sortProyectos.platzi)}>
            {sortProyectos.platzi}
          </p>
        </div>
      </div>
      <div>
        <ListOfCardPortafolio proyectos={proyectos} />
      </div>
    </div>
  );
};

export default Portafolio;
