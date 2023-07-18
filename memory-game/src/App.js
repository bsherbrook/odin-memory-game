import React, { useState, useEffect } from "react";
import ScoreBoard from './components/ScoreBoard';
import './styles/style.css';
import Board from './components/DisplayBoard';
import IsGameOver from './components/GameOver';
import WinGame from './components/WinGame';

function App() {
  const [score, setScore]= useState(0);
  const [bestScore, setBestCore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const incrementScore = () => {
    setScore(score + 1);
  };
  const incrementBestScore = () => {
    if (bestScore === 0) {
      setBestCore(score);
    }
    if (bestScore > 0) {
      if (bestScore < score) {
        setBestCore(score);
      }
    }
  };
  const restartGame = () => {
    setScore(0);
    setGameOver(false);
  };
  const handleWin = () => {
    setScore(0);
    setBestCore(0);
  };
  const handleGameOver = () => {
    setGameOver(true);
  };
  useEffect(() => {
    incrementBestScore();
  }, [score]);

  return (
    <div className="App">
      <ScoreBoard 
        score ={score}
        bestScore= {bestScore}
      />
      {!gameOver && bestScore < 21 && (<Board 
        incrementScore={incrementScore}
        setGameOver= {handleGameOver}
        gameOver= {gameOver}
        />
      )}
      {gameOver && bestScore < 21 && (<IsGameOver
          restartGame={restartGame}

        /> 
      )}
      {bestScore===21 && (<WinGame
          handleWin={handleWin}
      />)}  
    </div>
  );
}

export default App;

// function displayCats(){
  //   const cardContainer= document.getElementById('cardContainer');
  //   cardContainer.innerHTML='';
  //   const shuffledArray = catArray.slice();
   
  //   let n = shuffledArray.length;
  //   while (n > 0) {
  //     const randomIndex = Math.floor(Math.random() * n);
  //     [shuffledArray[n - 1], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[n - 1]];
  //     n--;
  //   }
  //   for (const element of shuffledArray) {
  //     const cardDiv = document.createElement('div');
  //     cardDiv.setAttribute('class', 'card');
  //     cardDiv.setAttribute('id', element);
  //     cardDiv.addEventListener('click', catClick)

  //     const picBoxDiv = document.createElement('div');
  //     picBoxDiv.setAttribute('id', 'picBox');

  //     const catImg = document.createElement('img');
  //     catImg.setAttribute('class', 'catPic');
  //     catImg.setAttribute('src', `${element}`);
  //     catImg.setAttribute('id', element);
  //     catImg.setAttribute('alt', '');

  //     picBoxDiv.appendChild(catImg);

  //     const catNameH4 = document.createElement('h4');
  //     catNameH4.setAttribute('class', 'catName');
  //     catNameH4.setAttribute('id', element);
  //     let revisedName= element.slice(6);
  //     let finalName= revisedName.slice(0,-4);
  //     catNameH4.textContent=finalName

  //     cardDiv.appendChild(picBoxDiv);
  //     cardDiv.appendChild(catNameH4);

  //     const cardContainer= document.getElementById('cardContainer');
  //     cardContainer.appendChild(cardDiv);
  //   }
  // }
  // function catClick(element){
  //   let click= element.target.id;
  //   if (clickArray.includes(click)===true){
  //     console.log('you lose')
  //   }
  //   else{
  //     displayCats();
  //     incrementScore();
  //     clickArray.push(click);
  //     console.log(clickArray);
  //  }
  // }