import React, { useState, useContext } from "react";
import { ScoreContext } from "../App";
import Button from "./Button";
import "./table.css";
import Token from "./Token";

const elements = ["paper", "scissors", "rock"];

function Table() {
  const { score, setScore } = useContext(ScoreContext);
  const [result, setResult] = useState("");
  const [playing, setPlaying] = useState(false);
  const [house, setHouse] = useState("");
  const [choice, setChoice] = useState("");

  const handleClick = async (name) => {
    // const choiceClicked = e.target.title;
    setPlaying(!playing);
    setChoice(name);
    const housePicked = await loadingHouse();
    const result = victory(name, housePicked);
    setResult(result);
    if (result === "win") {
      setScore(score + 1);
    }
  };

  const handleReset = () => {
    setPlaying(!playing);
    setHouse("");
    setResult("");
  };

  const getHouse = (max = 2, min = 0) => {
    return elements[Math.floor(Math.random() * (max - min + 1)) + min];
  };

  const loadingHouse = () => {
    return new Promise((resolve, reject) => {
      let housePicked;
      const interval = setInterval(() => {
        housePicked = getHouse();
        setHouse(housePicked);
      }, 75);
      setTimeout(() => {
        clearInterval(interval);
        resolve(housePicked);
      }, 3000);
    });
  };

  const victory = (name, housePicked) => {
    if (name === housePicked) {
      return "draw";
    }
    if (name === "rock") {
      if (housePicked === "scissors") {
        return "win";
      }
      if (housePicked === "paper") {
        return "lose";
      }
    }
    if (name === "paper") {
      if (housePicked === "rock") {
        return "win";
      }
      if (housePicked === "scissors") {
        return "lose";
      }
    }
    if (name === "scissors") {
      if (housePicked === "paper") {
        return "win";
      }
      if (housePicked === "rock") {
        return "lose";
      }
    }
  };

  return (
    <div className="table">
      {!playing ? (
        <>
          <Token name="paper" onClick={handleClick} />
          <Token name="scissors" onClick={handleClick} />
          <Token name="rock" onClick={handleClick} />
          <span className="line"></span>
        </>
      ) : (
        <>
          <div className="player-choice">
            <Token name={choice} />
            <p>You picked</p>
          </div>
          <div className="house-choice">
            <Token name={house} playing={playing} />
            <p>The house picked</p>
          </div>
          {result && (
            <div className="results">
              <h2>You {result}!</h2>
              <Button onClick={handleReset}>Play Again</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Table;
