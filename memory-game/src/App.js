import React, { useState, useEffect } from "react";
import ScoreBoard from './components/ScoreBoard';
import './styles/style.css';

function App() {
  const [score, setScore]= useState(0);

  const incrementScore = () =>{
    setScore(score + 1);
  };

  return (
    <div className="App">
      <ScoreBoard 
        score ={score}
        setScore= {setScore}
        incrementScore= {incrementScore}
      />
    </div>
  );
}

export default App;
