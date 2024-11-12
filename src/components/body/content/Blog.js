import React from "react";
// import ReactEmbedGist from 'react-embed-gist';

// blog components
import ArticleList from "./blog/ArticleList";

function BlogContentComponent({ contents }) {
  return contents ? (
    <div
      className="tab-pane fade pt-4"
      id="blog"
      role="tabpanel"
      aria-labelledby="blog-tab"
    >
      <div className="row py-4">
        <h3 className="h3">{contents["title"]}</h3>
        <ArticleList articles={contents.articles} />
        {/* 
          <ReactEmbedGist
            gist="waiphyo285/f24d816e9035ac36fa7f089166bdfb73"
            wrapperClass="gist__bash"
            titleClass="gist__title h5"
            loadingClass="loading__screen"
          /> 
        */}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default BlogContentComponent;
