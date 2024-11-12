import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import SeparateHeader from "../shared/others/SeparateHeader";

// Redux
import { fetchBanner } from "../../redux/features/bannerSlice";

function BannerComponent() {
  const dispatch = useDispatch();
  const bannerData = useSelector((state) => state.banner);

  React.useEffect(() => {
    if (bannerData.status === "pending") {
      dispatch(fetchBanner());
    }
  }, [bannerData, dispatch]);

  return (
    <div className="row my-5">
      <SeparateHeader headerName={"Let's talk about code & coffee"} />
      {bannerData.data && bannerData.data.length > 0 ? (
        <>
          <div className="col-lg-6 mt-lg-0">
            <div className="d-flex flex-row flex-wrap my-4">
              {bannerData.data[0].lang.map((lang, langIdx) => (
                <div key={langIdx} className="flex-item my-4 mx-2">
                  <i
                    style={{ fontSize: "28px" }}
                    className={`${lang} p-3 shadow-sm`}
                    onMouseEnter={() => {
                      document
                        .querySelector(`i.${lang}`)
                        .classList.add("colored");
                    }}
                    onMouseLeave={() => {
                      document
                        .querySelector(`i.${lang}`)
                        .classList.remove("colored");
                    }}
                  ></i>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="row my-4">
              {bannerData.data.map((banner, bannerIdx) => (
                <div key={bannerIdx} className="col-md-12">
                  {/* <div className="shadow-sm"> */}
                  <Player
                    loop
                    autoplay
                    src={banner.src}
                    style={{ height: "250px" }}
                  />
                  {/* </div> */}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-secondary py-5">
          <div className="spinner-grow" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default BannerComponent;
