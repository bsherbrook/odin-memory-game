import React, { useState, useEffect } from "react";


function ScoreBoard(props) {
  return (
    <div className="App">
      <div id="scoreBoard">
        <h1>Score: {props.score}</h1>
        <h1>Best Score: {props.bestScore}</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
