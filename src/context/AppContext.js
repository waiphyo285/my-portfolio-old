import React from "react";

// set the defaults
const AppContext = React.createContext({
  onScrollY: 0,
  showTopBtn: false,
  showSocial: false,
  setOnScrollY: () => {},
  setShowTopBtn: () => {},
  setShowSocial: () => {},
});

export default AppContext;
