import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";

export const ScoreContext = createContext();

function App() {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      <div className="App">
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </div>
    </ScoreContext.Provider>
  );
}

export default App;
