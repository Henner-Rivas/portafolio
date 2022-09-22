import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import database from "../posts.json";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsCalendar2Fill } from "react-icons/bs";
import { MdLabelImportant } from "react-icons/md";
import "../styles/BlogDetalle.scss";
import fotoHenner from "../assets/fotoHenner.jpg";
import Recomendaciones from "../components/ListOfRecomendaciones";
import { Context } from "../context";
import Markdown from "markdown-to-jsx";
import Code from "../components/code/index";

const BlogDetalle = () => {
  const { mode } = useContext(Context);

  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let blog = database.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, [blog, id]);

  let { title, date, category, content } = blog;
  return (
    <div className={mode ? "container_detalle dark" : "container_detalle"}>
      <div className="encabezado">
        <h1>{title}</h1>
      </div>
      <div className="container_detalle_contenido">
        <div className="detalle__perfil">
          <img src={fotoHenner} alt="" />
          <h4>Henner Rivas</h4>
          <p>Desarrollador full stack. Apasionado por la tecnologia</p>
          <div className="compartir">
            <h4>¡Compártelo!</h4>
            <div className="icons">
              <AiFillFacebook className="icon" />
              <AiFillLinkedin className="icon" />
              <AiFillTwitterSquare className="icon" />
            </div>
          </div>
        </div>

        <div className="container-text">
          <div className="date-category">
            <div className="item">
              <BsCalendar2Fill /> {date}
            </div>
            <div className="item">
              <MdLabelImportant /> {category}
            </div>
          </div>
          <div>
            {content && (
              <Markdown
                options={{
                  overrides: {
                    Code: {
                      component: Code,
                    },
                  },
                }}
              >
                {content}
              </Markdown>
            )}
          </div>
        </div>
      </div>
      <Recomendaciones />
    </div>
  );
};

export default BlogDetalle;
