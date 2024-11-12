import React from "react";

function ButtonListComponent({ buttons }) {
  return (
    <div className="" style={{ zIndex: "20" }}>
      {buttons.map((button, btnIdx) => {
        return button.isShow ? (
          <a
            key={btnIdx}
            href={button.link}
            className="btn btn-sm gradient-btn mx-1"
          >
            <i className={`${button.icon}`} aria-hidden="true"></i>
          </a>
        ) : (
          <span key={btnIdx}></span>
        );
      })}
    </div>
  );
}

export default ButtonListComponent;
