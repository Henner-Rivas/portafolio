import React from "react";
import blogs from "../../posts.json";
import CardBlog from "../card_blog";
import "./styles.scss";

const Recomendaciones = () => {
  return (
    <div className="container-recomendaciones">
      <h2>También te puede interesar</h2>
      <div className="container-list-recomendaciones">
        {blogs
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .slice(0, 3)
          .map((blog) => (
            <CardBlog key={blog.id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default React.memo(Recomendaciones);
