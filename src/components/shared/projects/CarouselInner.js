import React from "react";
import Img from "react-cool-img";
import ButtonList from "./ButtonList";
import defaultImg from "../../../assets/images/default-project.png";

function CarouselInnerComponent({ project }) {
  const { images } = project;
  // const [isMouseOver, setMouseOver] = React.useState(false);

  return (
    <div className="carousel-inner">
      {images.map((imageSrc, imgIdx) => {
        return (
          <div
            key={imgIdx}
            className={imgIdx === 0 ? "carousel-item active" : "carousel-item"}
            // onMouseOver={() => setMouseOver(true)}
            // onMouseOut={() => setMouseOver(false)}
          >
            <Img
              debounce={300}
              src={imageSrc}
              alt={`Slice ${imgIdx}`}
              placeholder={defaultImg}
              className="d-block w-100"
            />
          </div>
        );
      })}
    </div>
  );
}

export default CarouselInnerComponent;
