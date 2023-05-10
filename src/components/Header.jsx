import React from "react";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <h2 className="title">Attendance Calculator</h2>
      </a>
      <ul className="item-list">
        <li>
          <a href="/" className="link">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/college" className="link">
            College Academia
          </a>
        </li>
        <li>
          <a href="/pay" className="link">
            Donate Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
