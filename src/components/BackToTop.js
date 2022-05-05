import React from "react";
import "../styles/backtotop.css";

function BackToTop() {
  return (
    <div>
      <a href="#header" className="backtotop-btn">
        <span className="back-to-top-icon">&#8682;</span>
      </a>
    </div>
  );
}

export default BackToTop;
