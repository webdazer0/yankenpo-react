import React from "react";
import "./App.css";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
