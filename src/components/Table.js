import React from "react";
import "./table.css";
import Token from "./Token";

function Table() {
  return (
    <div className="table">
      <Token name="paper" />
      <Token name="scissors" />
      <Token name="rock" />
      <span className="line"></span>
    </div>
  );
}

export default Table;
