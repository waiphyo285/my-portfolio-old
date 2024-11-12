import React from "react";

function PrevNextButtonComponent({ projectId }) {
  return (
    <>
      <button
        type="button"
        className="carousel-control-prev"
        data-bs-target={`#carouselIndicator-${projectId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <a
        type="button"
        className="carousel-control-next"
        data-bs-target={`#carouselIndicator-${projectId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </>
  );
}

export default PrevNextButtonComponent;
