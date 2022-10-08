import React, { useMemo, useState, useContext } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ListOfBlog from "../components/ListOfBlog";
import Search from "../components/SearchBlogs";
import { Context } from "../context";
import database from "../posts.json";

import "../styles/Blog.scss";

const sortItems = {
  date: "date",
  backend: "backend",
  fronend: "frontend",
};
const Blog = () => {
  const { mode } = useContext(Context);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(sortItems.date);
  const [blogs, setBlogs] = useState([]);
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const filterMemo = useMemo(() => {
    if (search) {
      let dataSearch = database.filter((el) => {
        return el.content.toLowerCase().includes(search.toLowerCase());
      });
      return dataSearch;
    }

    if (filter === sortItems.backend) {
      let dataBackend = database.filter((el) => {
        return el.category
          .toLowerCase()
          .includes(sortItems.backend.toLowerCase());
      });
      return dataBackend;
    }

    if (filter === sortItems.fronend) {
      let datafronend = database.filter((el) => {
        return el.category
          .toLowerCase()
          .includes(sortItems.fronend.toLowerCase());
      });
      return datafronend;
    }

    if (filter === sortItems.date) {
      return database;
    }
  }, [search, filter]);

  useEffect(() => {
    setBlogs(filterMemo);
  }, [filterMemo]);

  return (
    <>
      <Helmet>
        <title>Blog - Henner Rivas Berrio </title>
        <meta
          name="descripcion"
          content="Compartire conocimiento sobre desarrollo de software, programación y todo lo relacionado con la tecnologia"
        />
      </Helmet>

      <div className={mode ? "container__blog dark" : "container__blog"}>
        <div className="container__titulo">
          <h3>Mi Blog</h3>
        </div>
        <p>
          {" "}
          Compartire conocimiento sobre desarrollo de software, programación y
          todo lo relacionado con la tecnologia..{" "}
        </p>
        <div className="blogs">
          <Search
            sortItems={sortItems}
            handleSearch={handleSearch}
            setFilter={setFilter}
            filter={filter}
          />
          <div className="blog__container__card">
            <ListOfBlog blogs={blogs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
