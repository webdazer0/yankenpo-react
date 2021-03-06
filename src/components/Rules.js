import React, { useState } from "react";
import Button from "./Button";
import "./rules.css";

function Rules() {
  const [visible, setVisible] = useState(false);

  const handleToggleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="rules">
      {visible && (
        <div className="rules-overlay">
          <div className="rules-modal">
            <h2>Rules</h2>
            <img src="./images/image-rules.svg" alt="" />
            <img
              onClick={handleToggleClick}
              src="./images/icon-close.svg"
              className="close-modal"
              alt=""
            />
          </div>
        </div>
      )}
      <Button onClick={handleToggleClick}>Rules</Button>
    </div>
  );
}

export default Rules;
