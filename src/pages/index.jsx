import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Pages component
import HomePage from "../pages/home/index";

// Common component
// import AuthModal from "../components/shared/forms/AuthModal";
// import EditFormModal from "../components/shared/forms/EditFormModal";
import ContactButton from "../components/shared/buttons/ContactButton";
import ScrollTop from "../components/shared/buttons/ScrollTopButton";
import ProgressBar from "../components/shared/others/ProgressBar";

// Context
import AppContext from "../context/AppContext";

// Redux
import { fetchContact } from "../redux/features/contactSlice";

function MainPage() {
  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.contact);

  const { onScrollY } = React.useContext(AppContext);

  React.useEffect(() => {
    if (contactData.status === "pending") {
      dispatch(fetchContact());
    }
  }, [contactData, dispatch]);

  return (
    <>
      <div className="fixed-top">
        <ProgressBar scrollVal={onScrollY} />
      </div>
      <div className="relative">
        {/* <AuthModal /> */}
        {/* <EditFormModal /> */}
        <ScrollTop scrollVal={onScrollY} />
        <ContactButton contacts={contactData.data} />
      </div>
      <div className="container">
        <HomePage />
      </div>
    </>
  );
}

export default MainPage;
