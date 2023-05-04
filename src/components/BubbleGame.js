import React, { useState } from 'react';

const Bubble = ({ color, onClick }) => {
  const bubbleStyle = {
    backgroundColor: color,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '10px',
    cursor: 'pointer',
  };

  return <div style={bubbleStyle} onClick={onClick}></div>;
};

const BubbleGame = () => {
  const [score, setScore] = useState(0);

  const handleBubbleClick = () => {
    setScore(score + 1);
  };

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];

  return (
    <div>
      <h1>Bubble Pop Game</h1>
      <p>Score: {score}</p>
      <div>
        {colors.map((color) => (
          <Bubble key={color} color={color} onClick={handleBubbleClick} />
        ))}
      </div>
    </div>
  );
};

export default BubbleGame;