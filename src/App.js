import React from "react";
import ReactGA from "react-ga";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Service storage
import ssService from "./services/sessionStorage";

// Context provider
import AppContext from "./context/AppContext";

// Pages component
import MainPage from "./pages/index";
import EditPage from "./pages/edit";
import NotFound from "./pages/404";

// Style component
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/index.css";

// need to more configure
const TRACKING_ID = "G-FZC8TC76L2";
ReactGA.initialize(TRACKING_ID);

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const user = ssService.getItem("user");

  const [onScrollY, setOnScrollY] = React.useState(0);
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const [showSocial, setShowSocial] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        onScrollY,
        showTopBtn,
        showSocial,
        setShowTopBtn,
        setOnScrollY,
        setShowSocial,
      }}
    >
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          path="/view"
          element={
            <ProtectedRoute user={user}>
              <EditPage />
            </ProtectedRoute>
          }
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
