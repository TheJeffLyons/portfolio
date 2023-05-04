import React from "react";
import "../App.css";
import ComingSoon from "./ComingSoon";
import BubbleGame from "./BubbleGame";

function Main() {
  return (
    <div className="app-container">
      <div>
        <ComingSoon />
       <BubbleGame />
      </div>

      <div></div>
    </div>
  );
}

export default Main;
