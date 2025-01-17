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
import { Helmet } from "react-helmet-async";
import Error404 from "../components/404";
const BlogDetalle = () => {
  const { mode } = useContext(Context);

  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  let blog = database.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    if (blog) {
      setBlogs(blog);
    }
  }, [blogs, id, blog]);
  if (!blog) {
    return <Error404 />;
  }

  let { title, date, category, content } = blogs;

  return (
    <>
      <Helmet>
        <title>Blog - Henner Rivas Berrio </title>
        <meta
          name="descripcion"
          content="Compartire conocimiento sobre desarrollo de software, programación y todo lo relacionado con la tecnologia"
        />
      </Helmet>

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
                <a
                  href={`http://www.facebook.com/sharer.php?u=henner-rivas.vercel.app/blog/${id}&t=pagina de desarrollo web`}
                  rel="noreferrer"
                  className="icon"
                  target="_blank"
                >
                  <AiFillFacebook className="icon" />
                </a>
                <a
                  href={`http://www.linkedin.com/shareArticle?url=https://henner-rivas.vercel.app/blog/${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="icon" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=MIEpresa&url=https://henner-rivas.vercel.app/blog/${id}&via=Empresa&hashtags=#miempresa`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterSquare className="icon" />
                </a>
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
    </>
  );
};

export default BlogDetalle;
