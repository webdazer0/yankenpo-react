import React from "react";
import "./wrapper.css";

function Wrapper({ children }) {
  return <div className="wrap">{children}</div>;
}

export default Wrapper;
