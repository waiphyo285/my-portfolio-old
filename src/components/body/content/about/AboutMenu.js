import React from "react";

function AboutMenuComponent({ contents, menuName, isActive }) {
  return (
    <a
      role="tab"
      data-bs-toggle="list"
      href={`#list-${menuName}`}
      id={`list-${menuName}-list`}
      aria-controls={`list-${menuName}`}
      className={`p-3 about-nav-item ${isActive}`}
    >
      <span className={contents[menuName]["icon"]}>&nbsp;&nbsp;</span>
      {contents[menuName]["title"]}
    </a>
  );
}

export default AboutMenuComponent;
