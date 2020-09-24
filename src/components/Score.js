import React, { useContext } from "react";
import { ScoreContext } from "../App";
import "./score.css";

function Score() {
  const { score } = useContext(ScoreContext);

  return (
    <div className="score">
      <small>score</small>
      <p>{score}</p>
    </div>
  );
}

export default Score;
