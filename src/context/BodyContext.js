import React from "react";

// set the defaults
const BodyContext = React.createContext({
  isAnimate: false,
  setIsAnimate: () => {},
});

export default BodyContext;
