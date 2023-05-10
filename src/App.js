import React from "react";
import "./App.css";
import IdealCalc from "./components/idealCalc";
import InputCalc from "./components/inputCalc";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <IdealCalc />
      <InputCalc />
    </div>
  );
}

export default App;
