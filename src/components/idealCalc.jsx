import React from "react";
import Field from "./fieldbox";

const IdealCalc = () => {
  const [verified, setVerified] = React.useState(false);
  async function handleSendOTP(e) {
    setVerified(false);
  }
  return (
    <div>
      <div className="ideal-page">
        <h2 className="ideal-title">
          How many days do I need to go to college for 75%?
        </h2>
        <div className="form-container">
          <form className="form">
            <label>
              How many classes of a single subject in a week?
              <Field></Field>
            </label>

            <input type="submit" />
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
      </div>
    </div>
  );
};

export default IdealCalc;
