import React from "react";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

// Content components
import HomeContent from "./content/Home";
import AboutContent from "./content/About";
import BlogContent from "./content/Blog";
import ContactContent from "./content/Contact";

// Context provider
import BodyContext from "../../context/BodyContext";

const styles = {
  fadeIn: {
    duration: 1,
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

function TabContentComponent({ contents }) {
  const { isAnimate, setIsAnimate } = React.useContext(BodyContext);

  return (
    <StyleRoot>
      <div
        id="myTabContent"
        className="tab-content"
        style={isAnimate ? styles.fadeIn : null}
      >
        {contents && contents.length > 0 ? (
          <>
            <HomeContent contents={contents[0]} />
            <AboutContent contents={contents[1]} />
            <BlogContent contents={contents[2]} />
            <ContactContent contents={contents[3]} />
          </>
        ) : (
          <div className="text-center text-secondary py-5">
            <div className="spinner-grow" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
      </div>
    </StyleRoot>
  );
}

export default TabContentComponent;
