import React from "react";
import IdealCalc from "./components/idealCalc";
import InputCalc from "./components/inputCalc";
import classes from "./App.module.css";
function App() {
  return (
    <>
      <div className={classes.app}>
        <h1 className={classes.h1}>Attendance Calculator</h1>
        <div>
          <IdealCalc />
          <InputCalc />
        </div>
      </div>
    </>
  );
}

export default App;
