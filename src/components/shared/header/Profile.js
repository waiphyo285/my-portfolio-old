import React from "react";
import parse from "html-react-parser";

function ProfileComponent({ profile_img, fullname, greeting, summary }) {
  const handleScrollToNext = () => {
    const viewportHeight = window.innerHeight;
    const scrollTarget = viewportHeight * 1;
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        style={{ minHeight: "100vh" }}
        className="row d-flex align-items-center"
      >
        <div className="col-lg-6 order-lg-2 text-center">
          <figure className="position-relative">
            <img
              src={profile_img}
              alt="Profile"
              width={200}
              height={200}
              className="img profile-img"
            />
          </figure>

          <div className="whoami">
            <h1 className="title-name">{fullname}</h1>
            <span className="mx-2 greeting">{greeting}</span>
          </div>

          <summary className="my-summary my-summary-sm d-md-none mt-5 pt-5 ">
            {parse(summary)}
          </summary>
        </div>

        <div className="col-lg-6 order-lg-1 p-5">
          <summary className="my-summary d-none d-md-block">
            {parse(summary)}
          </summary>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          onClick={handleScrollToNext}
          className="position-absolute bottom-0 mb-2 p-0 border-0 bg-transparent"
        >
          <i
            style={{ fontSize: "30px" }}
            className="animated-arrow bi bi-arrow-down-circle"
          />
        </button>
      </div>
    </div>
  );
}

export default ProfileComponent;
