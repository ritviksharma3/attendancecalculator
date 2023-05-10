import "./landingPage.css";
import React from "react";
import App from "./App";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <nav className="landingPageNav">Get rid of Medicals</nav>
      <div className="landingPageBody">
        <a href={<App />}>
          <button className="btn">Find your ideal Attendance</button>
        </a>
        <a href={<App />}>
          <button className="btn">Find your current Attendance</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
