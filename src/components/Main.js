import React from "react";
import "../App.css";
import ComingSoon from "./ComingSoon";
import BubbleGame from "./Pong";

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
