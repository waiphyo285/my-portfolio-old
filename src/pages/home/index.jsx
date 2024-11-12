import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useSelector, useDispatch } from "react-redux";

// Home components
import HeaderComponent from "../../components/home/Header";
import ContentComponent from "../../components/home/Body";
// import ProjectComponent from "../../components/home/Project";
import RepositoryComponent from "../../components/home/Repository";
import BannerComponent from "../../components/home/Banner";
import FooterComponent from "../../components/home/Footer";

// Redux
import { fetchMe } from "../../redux/features/meSlice";

// Loading
import "../../assets/styles/loading.css";

function HomePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const personalData = useSelector((state) => state.personal);

  const handleFetchData = (data, fetchData) => {
    if (data.status === "pending") {
      dispatch(fetchData());
    }
  };

  // First content page & fetch here more
  React.useEffect(() => {
    handleFetchData(personalData, fetchMe);
  }, [personalData, dispatch]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading]);

  return !loading ? (
    <>
      <HeaderComponent />
      <ContentComponent>
        <RepositoryComponent />
        <BannerComponent />
        <FooterComponent />
      </ContentComponent>
    </>
  ) : (
    <div className="jumbotron vertical-center">
      <div className="load-container">
        <PulseLoader
          color={"#7c9298"}
          loading={loading}
          cssOverride={{
            display: "block",
            margin: "0 auto",
          }}
          size={16}
        />
      </div>
    </div>
  );
}

export default HomePage;
