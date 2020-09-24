import React from "react";
import "./score.css";

function Score({ value = 0 }) {
  return (
    <div className="score">
      <small>score</small>
      <p>{value}</p>
    </div>
  );
}

export default Score;
