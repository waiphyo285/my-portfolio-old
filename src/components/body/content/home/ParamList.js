import React from "react";
import parse from "html-react-parser";

function ParamListComponent({ params }) {
  return (
    <div className="col-md-12">
      {params.map((param, paramIdx) => (
        <p className="p" key={paramIdx} style={{ textAlign: "justify" }}>
          {parse(param)}
        </p>
      ))}
    </div>
  );
}

export default ParamListComponent;
