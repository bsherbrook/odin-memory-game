import React, { useState, useEffect } from "react";


function ScoreBoard(props) {
  return (
    <div className="App">
      <h1>Score: {props.score}</h1>
      <button onClick={props.incrementScore}>Click Me!</button>
    </div>
  );
}

export default ScoreBoard;
