import React from "react";
import "./header.css";
import Score from "./Score";

function Header() {
  return (
    <header className="">
      <h1>
        Rock <br />
        Paper <br />
        Scissors
      </h1>
      <Score />
    </header>
  );
}

export default Header;
