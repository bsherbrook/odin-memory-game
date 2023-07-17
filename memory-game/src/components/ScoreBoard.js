import React, { useState, useEffect } from "react";


function ScoreBoard(props) {
  return (
    <div className="App">
      <h1>Score: {props.score}</h1>
      <button onClick={props.displayCats}>Click Me!</button>
    </div>
  );
}

export default ScoreBoard;
