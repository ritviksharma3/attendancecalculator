import React from "react";
import Field from "./fieldbox";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import "../form.css";
const InputCalc = () => {
  const [input1, changeinput1] = React.useState(0);
  const [input2, changeinput2] = React.useState(0);
  const [input3, changeinput3] = React.useState(0);
  const [err, changeerr] = React.useState(null);
  const [msg, changemsg] = React.useState(null);
  const [verified, setVerified] = React.useState(false);
  async function handleSendOTP(e) {
    setVerified(false);
  }
  const submitHandler1 = (e) => {
    changeinput1(e.target.value);
  };
  const submitHandler2 = (e) => {
    changeinput2(e.target.value);
  };
  const submitHandler3 = (e) => {
    changeinput3(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const totalClassesInWeek = Number(input1);
    const totalClassesInMonth = totalClassesInWeek * 4;
    console.log(totalClassesInMonth);
    const classesNeededWithoutMedical = Math.ceil(
      (75 * totalClassesInMonth) / 100
    );
    const classesNeededWithMedical = Math.ceil(
      (65 * totalClassesInMonth) / 100
    );

    const totalClassesAttended = Number(input2);
    const totalClassesNotAttended = Number(input3);

    if (totalClassesAttended + totalClassesNotAttended > totalClassesInMonth) {
      changeerr(
        "Total Classes Happened as of Now Can't be Greater than total classes in a month please enter data of a month"
      );
    } else {
      let totalClassesLeft =
        Number(totalClassesInMonth) -
        (Number(totalClassesAttended) + Number(totalClassesNotAttended));
      if ((totalClassesAttended / totalClassesInMonth) * 100 >= 75) {
        changemsg(
          "Your attendance is okay you don't need to attend anymore classes"
        );
      } else {
        let totalClassesNeeded =
          (75 / 100) * totalClassesInMonth - totalClassesAttended;
        console.log("needed", totalClassesNeeded);
        console.log("left", totalClassesLeft);
        if (totalClassesNeeded > totalClassesLeft) {
          changeerr("You are detained");
        } else {
          changemsg(`You need to attend ${totalClassesNeeded} classes \n
            You can take  ${
              totalClassesInMonth -
              (totalClassesNeeded +
                totalClassesAttended +
                totalClassesNotAttended)
            } more Holiday`);
        }
      }
    }
  };
  return (
    <div>
      <div className="ideal-page">
        <h2 className="ideal-title">
          How many days do I need to go to college for 75% after input?
        </h2>
        <div className="form-container">
          <form className="form" onSubmit={formSubmit}>
            <label>How many classes of a single subject in a week?</label>
            <TextField
              className="inp"
              onChange={submitHandler1}
              id="outlined-basic"
              label="Days"
              variant="outlined"
              required
            />
            <label>How many classes you have attended?</label>
            <TextField
              className="inp"
              onChange={submitHandler2}
              id="outlined-basic"
              label="Days"
              variant="outlined"
              required
            />
            <label>How many classes were you absent?</label>
            <TextField
              className="inp"
              onChange={submitHandler3}
              id="outlined-basic"
              label="Days"
              variant="outlined"
              required
            />
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </form>
        </div>
        {verified && (
          <div className="output">
            <h3 className="result">
              You need to go for x Days to maintain 75%
            </h3>
            <h3 className="result">
              You need to go for x Days with Medical to maintain 65%
            </h3>
            <h4 className="notice">Note: Holidays are NOT counted.</h4>
          </div>
        )}
        {err && (
          <div className="output">
            <h3 className="result">{err}</h3>
          </div>
        )}
        {msg && (
          <div className="output">
            <h3 className="result">{msg}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCalc;
