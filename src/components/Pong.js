import React, { useState, useEffect } from "react";



const Paddle = ({ top, left }) => (
    <div
      style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: "10px",
        height: "50px",
        backgroundColor: "#fff",
      }}
    />
  );
  
  const Ball = ({ top, left }) => (
    <div
      className="ball"
      style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: "10px",
        height: "10px",
        backgroundColor: "#fff",
        borderRadius: "50%",
      }}
    />
  );
  
  const Pong = () => {
    const [player1Top, setPlayer1Top] = useState(200);
    const [player2Top, setPlayer2Top] = useState(200);
    const [ballTop, setBallTop] = useState(200);
    const [ballLeft, setBallLeft] = useState(300);
    const [ballSpeed, setBallSpeed] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
  
    useEffect(() => {
      if (gameStarted) {
        // Move the ball
        const interval = setInterval(() => {
          setBallTop((prevBallTop) => prevBallTop + ballSpeed);
          setBallLeft((prevBallLeft) => prevBallLeft + ballSpeed);
        }, 50);
  
        // Check for collisions
        const ball = document.querySelector(".ball");
        const player1 = document.querySelector(".player1");
        const player2 = document.querySelector(".player2");
  
        const checkCollision = () => {
          if (ball.offsetTop < 0 || ball.offsetTop > 390) {
            setBallSpeed((prevBallSpeed) => -prevBallSpeed);
          }
          if (
            ball.offsetLeft < 15 &&
            ball.offsetTop >= player1.offsetTop &&
            ball.offsetTop <= player1.offsetTop + 50
          ) {
            setBallSpeed((prevBallSpeed) => -prevBallSpeed);
          }
          if (
            ball.offsetLeft > 575 &&
            ball.offsetTop >= player2.offsetTop &&
            ball.offsetTop <= player2.offsetTop + 50
          ) {
            setBallSpeed((prevBallSpeed) => -prevBallSpeed);
          }
        };
  
        const handleKeyDown = (event) => {
          // Move player 1
          if (event.key === "w" && player1Top > 0) {
            setPlayer1Top((prevPlayer1Top) => prevPlayer1Top - 10);
          }
          if (event.key === "s" && player1Top < 350) {
            setPlayer1Top((prevPlayer1Top) => prevPlayer1Top + 10);
          }
  
          // Move player 2
          if (event.key === "o" && player2Top > 0) {
            setPlayer2Top((prevPlayer2Top) => prevPlayer2Top - 10);
          }
          if (event.key === "l" && player2Top < 350) {
            setPlayer2Top((prevPlayer2Top) => prevPlayer2Top + 10);
          }
        };
  
        document.addEventListener("keydown", handleKeyDown);
  
        const gameLoop = setInterval(() => {
          checkCollision();
        }, 10);
  
        return () => {
          clearInterval(interval);
          document.removeEventListener("keydown", handleKeyDown);
          clearInterval(gameLoop);
        };
      }
    }, [ballSpeed, player1Top, player2Top]);

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "400px",
        backgroundColor: "#000",
      }}
    >
      <Paddle top={player1Top} left={10} />
      <Paddle top={player2Top} left={580} />
      <Ball top={ballTop} left={ballLeft} />
    </div>
  )}

  export default Pong