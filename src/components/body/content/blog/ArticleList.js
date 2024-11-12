import React from "react";
import TagsList from "./TagsList";

function ArticleListComponent({ articles }) {
  return (
    <div className="col-md-12 mb-2">
      <div className="row">
        {articles.map((article, artIdx) => (
          <div
            key={artIdx}
            className="col-md-4 my-2 my-sm-0 article"
            onClick={() => window.open(article.link, "_blank")}
          >
            <div className="col-md-12">
              <img
                className="img img-thumbnail d-block w-100"
                src={`/images/blog/blog-${++artIdx}.jpg`}
                alt={`Blog ${artIdx}`}
              />
            </div>
            <div className="col-md-12 mt-3">
              <h5 className="card-title">{article.title}</h5>
              <div>
                <TagsList tags={article.tags} />
              </div>
              <p className="pt-2">{article.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleListComponent;
