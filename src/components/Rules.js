import React, { useState } from "react";
import Button from "./Button";
import "./rules.css";

function Rules() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="rules">
      {visible && (
        <div className="rules-overlay">
          <h2>Rules</h2>
          <img src="./images/image-rules.svg" alt="" />
          <img
            onClick={handleClick}
            src="./images/icon-close.svg"
            className="close-overlay"
            alt=""
          />
        </div>
      )}
      <Button onClick={handleClick} />
    </div>
  );
}

export default Rules;
