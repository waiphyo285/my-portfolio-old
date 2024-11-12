import React from "react";
import SwitchTheme from "../shared/buttons/SwitchTheme";

function NavListComponent({ navlist }) {
  const handleScrollToTop = () => {
    const viewportHeight = window.innerHeight;
    const scrollTarget = viewportHeight * 1;
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  return (
    <ul
      id="myTab"
      role="tablist"
      className="nav nav-pills nav-fill p-3 "
      style={{
        position: "sticky",
        top: 3,
        background: "var(--primary-color)",
        zIndex: 1000,
      }}
    >
      {navlist &&
        navlist.map(
          (nav, navIdx) =>
            nav.show && (
              <li className="nav-item" role="presentation" key={navIdx}>
                <button
                  type="button"
                  role="tab"
                  id={nav.name + "-tab"}
                  data-bs-toggle="tab"
                  aria-controls={nav.name}
                  aria-selected={nav.active}
                  data-bs-target={"#" + nav.name}
                  className={
                    nav.active === "true" ? "nav-link active" : "nav-link"
                  }
                  onClick={handleScrollToTop}
                >
                  <span className={`${nav.icon} d-sm-none`}></span>
                  <span className={`d-none d-sm-inline`}>
                    {nav["show-text"]}
                  </span>
                </button>
              </li>
            )
        )}
      <li className="nav-item" role="presentation">
        <SwitchTheme />
      </li>
    </ul>
  );
}

export default NavListComponent;
