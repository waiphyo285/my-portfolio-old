import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Body components
import NavList from "../body/NavList";
import TabContent from "../body/TabContent";

// Context provider
import BodyContext from "../../context/BodyContext";

// Redux
import { fetchNav } from "../../redux/features/navlistSlice";
import { fetchContent } from "../../redux/features/contentSlice";

function BodyComponent({ children }) {
  const dispatch = useDispatch();
  const navlistData = useSelector((state) => state.navlist);
  const contentData = useSelector((state) => state.content);

  const [isAnimate, setIsAnimate] = React.useState(false);
  const value = { isAnimate, setIsAnimate };

  React.useEffect(() => {
    if (navlistData.status === "pending") {
      dispatch(fetchNav());
    }
  }, [navlistData, dispatch]);

  React.useEffect(() => {
    if (contentData.status === "pending") {
      dispatch(fetchContent());
    }
  }, [contentData, dispatch]);

  return (
    <BodyContext.Provider value={value}>
      <div className="row">
        <NavList navlist={navlistData.data} />
        <TabContent contents={contentData.data} />
        {children}
      </div>
    </BodyContext.Provider>
  );
}

export default BodyComponent;
