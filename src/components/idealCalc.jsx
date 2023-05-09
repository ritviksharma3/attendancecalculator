import React from "react";
import "../form.css";
import TextField from "@mui/material/TextField";
const IdealCalc = () => {
  const [verified, setVerified] = React.useState(false);
  const [classesNeededWithoutMedical, changeclassesNeededWithoutMedical] =
    React.useState(0);
  const [classesNeededWithMedical, changeclassesNeededWithMedical] =
    React.useState(0);
  async function submitHandler(e) {
    const totalClassesInWeek = e.target.value;
    const totalClassesInMonth = totalClassesInWeek * 4;
    changeclassesNeededWithoutMedical(
      Math.ceil((75 * totalClassesInMonth) / 100)
    );
    changeclassesNeededWithMedical(Math.ceil((65 * totalClassesInMonth) / 100));

    e.preventDefault();
    console.log("Form Submitted", e.target.value);
    setVerified(true);
  }
  return (
    <>
      <div className="ideal-page">
        <h2 className="ideal-title">
          How many days do I need to go to college for 75%?
        </h2>
        <div className="form-container">
          <form className="form" onSubmit={submitHandler}>
            <label>How many classes of a single subject in a week?</label>
            <TextField
              className="inp"
              onChange={submitHandler}
              id="outlined-basic"
              label="Days"
              variant="outlined"
              required
            />
          </form>
        </div>
        {verified && (
          <div className="output">
            <h3 className="result">
              You need to go for {classesNeededWithoutMedical} Days to maintain
              75%
            </h3>
            <h3 className="result">
              You need to go for {classesNeededWithMedical} Days with Medical to
              maintain 65%
            </h3>
            <h4 className="notice">Note: Holidays are NOT counted.</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default IdealCalc;
