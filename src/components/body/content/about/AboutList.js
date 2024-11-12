import React from "react";

function AboutListComponent({ contents }) {
  return contents.map((content, contIdx) => (
    <div key={contIdx}>
      <li style={{ listStyle: "none" }} className={`p-3 `}>
        <div className="d-flex w-100 justify-content-between">
          <strong className="fw-bold"> {content.title} </strong>
          {content.duration && (
            <span className=" pt-2" style={{ minWidth: "130px" }}>
              {content.duration}
            </span>
          )}
        </div>
        {content.portfolio === "#" ? (
          <div className="text-gray mt-3">{content["sub-title"]} </div>
        ) : (
          <a href="#" onClick={() => window.open(content.portfolio, "_blank")}>
            {content["sub-title"]}
          </a>
        )}
      </li>
      {contents.length - 1 !== contIdx && <hr className="m-0" />}
    </div>
  ));
}

export default AboutListComponent;
