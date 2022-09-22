import React from "react";
import CardBlog from "../card_blog";
import "./styles.scss";
const ListOfBlog = ({ blogs }) => {
  return (
    <div className="blog__container__card">
      {blogs?.map((blog) => (
        <CardBlog key={blog.id} blog={blog} />
      ))}
      {blogs.length < 1 && <p>😥 No hay blogs para tu busqueda</p>}
    </div>
  );
};

export default React.memo(ListOfBlog);
