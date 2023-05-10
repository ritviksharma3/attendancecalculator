import React from "react";
import "./App.css";
import IdealCalc from "./components/idealCalc";
import InputCalc from "./components/inputCalc";
import Header from "./components/Header";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <div className={classes.app}>
        <h1 className={classes.h1}>Attendance Calculator</h1>
        <div>
          <Header />
          <IdealCalc />
          <InputCalc />
        </div>
      </div>
    </>
  );
}

export default App;
