import React from "react";
import "../App.css";
import ComingSoon from "./ComingSoon";
import Pong from "./Pong";

function Main() {
  return (
    <div className="app-container">
      <div>
        <ComingSoon />
       <Pong />
      </div>

      <div></div>
    </div>
  );
}

export default Main;
