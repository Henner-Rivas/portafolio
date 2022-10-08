/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useMemo, useEffect } from "react";
import ListOfCardPortafolio from "../components/ListOfCardPortafolio";
import { Context } from "../context";
import "../styles/Portafolio.scss";
import proyectosdb from "../dbProyectos.json";
import { Helmet } from "react-helmet-async";
const sortProyectos = {
  todo: "Todo",
  platzi: "Platzi",
  "landing-page": "Landing page",
  freelance: "Freelance",
  personal: "Challenge",
};

const Portafolio = () => {
  const [proyectos, setProyectos] = useState();

  const { mode } = useContext(Context);
  const [filter, setFilter] = useState(sortProyectos.todo);

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
  }, [filter]);

  useEffect(() => {
    setProyectos(filterMemo);
  }, [filterMemo]);
  return (
    <>
      <Helmet>
        <title>Portafolio - Henner Rivas Berrio </title>
        <meta
          name="descripcion"
          content="Estos son algunos de los proyectos en los que he trabajado, algunos personales y otros para empresas

          "
        />
      </Helmet>
      <div
        className={
          mode ? "container__portafolio dark" : "container__portafolio"
        }
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

            <p onClick={() => setFilter(sortProyectos.personal)}>
              {sortProyectos.personal}
            </p>
            <p onClick={() => setFilter(sortProyectos.platzi)}>
              {sortProyectos.platzi}
            </p>
          </div>
        </div>
        <div className="container_list_portafolio">
          <ListOfCardPortafolio proyectos={proyectos} />
        </div>
      </div>
    </>
  );
};

export default Portafolio;
