import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

// home components
import ParamList from "./home/ParamList";

function HomeContentComponent({ contents }) {
  return contents ? (
    <div
      className="tab-pane fade pt-4 show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="row py-4">
        <div className="col-md-12">
          <h3 className="h3 mb-5">{contents?.["title"]}</h3>

          <div className="row">
            <div className="col-md-4 pb-5">
              <Player
                loop
                autoplay
                src={"/images/lotties/male-web-development.json"}
                style={{ height: "280px" }}
              />
            </div>
            <div className="col-md-8">
              <ParamList params={contents.paragraph} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default HomeContentComponent;
