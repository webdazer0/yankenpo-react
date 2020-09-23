import React from "react";
import "./token.css";

function Token({ name }) {
  return (
    <div className={`token ${name}`}>
      <div className="token-box">
        <img src={`/images/icon-${name}.svg`} alt={name} title={name} />
      </div>
    </div>
  );
}

export default Token;
