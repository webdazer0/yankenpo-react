import React from "react";
import "./token.css";

function Token({ name, onClick, playing }) {
  const item = !playing ? name : "default";
  return (
    <div className={`token ${!name ? item : name}`}>
      <div className="token-box">
        <img
          src={`/images/icon-${name}.svg`}
          alt={item}
          title={item}
          onClick={() => onClick && onClick(name)}
        />
      </div>
    </div>
  );
}

export default Token;
