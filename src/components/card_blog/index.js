import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Markdown from "markdown-to-jsx";
import Code from "../code/index";

const CardBlog = ({ blog }) => {
  let { content, date, category, id } = blog;

  return (
    <div className="blog__card">
      <div className="blog__card_img"></div>
      <div className="blog__card_body">
        <div className="texto">
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {content.length > 20 ? `${content.slice(0, 100)}...` : content}
          </Markdown>
        </div>
        <Link to={`/blog/${id}`}>
          <button className="read_more">
            <span className="label">Leer mas</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
        </Link>
      </div>
      <div className="footer">
        <p className="fecha"> {date}</p>
        <div className="category">
          <p> {category}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardBlog);
