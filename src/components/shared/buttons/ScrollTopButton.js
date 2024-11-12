import React from "react";

// Context Provider
import AppContext from "../../../context/AppContext";

const ScrollTopComponent = ({ scrollVal: PropsScrollVal }) => {
  const {
    showTopBtn,
    setShowTopBtn,
    setOnScrollY,
  } = React.useContext(AppContext);

  // scroll top event handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOnScrollY(0);
  };

  const onWindowScroll = () => {
    const scrollVal = document.documentElement.scrollTop;
    (scrollVal > 220) ? setShowTopBtn(true) : setShowTopBtn(false);
    setOnScrollY(scrollVal);
  };

  window.addEventListener("scroll", onWindowScroll);

  return (
    <>
      {
        showTopBtn && (
          <button
            href="#top"
            onClick={scrollToTop}
            className="btn gradient-btn top-to-btn"
          >
            <i className="bi-chevron-up"></i>
          </button>
        )
      }
    </>
  );
};

export default ScrollTopComponent;
