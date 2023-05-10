import React from "react";
import "./App.css";
import IdealCalc from "./components/idealCalc";
import InputCalc from "./components/inputCalc";
import Header from "./components/Header";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={classes.app}>
        <IdealCalc />
        <InputCalc />
      </div>
    </>
  );
}

export default App;
