import React from "react";
import "./token.css";

function Token({ name, onClick, playing, isAnimated }) {
  const item = !playing ? name : "default";
  return (
    <div
      className={`token ${!name ? item : name} ${isAnimated && "isAnimated"}`}
    >
      <div className="token-box">
        <img
          src={`./images/icon-${name}.svg`}
          alt={item}
          title={item}
          onClick={() => onClick && onClick(name)}
        />
      </div>
    </div>
  );
}

export default Token;
