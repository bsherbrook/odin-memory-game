import React, { useState, useEffect } from "react";
import ScoreBoard from './components/ScoreBoard';
import CatCard from './components/Card'
import './styles/style.css';

function App() {
  const [score, setScore]= useState(0);
  //const [bestScore, setBestCore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [clickArray, setClickArray] = useState([]);
  const [catArray, setCatArray] = useState([
    "./img/Abyssinian.jpg","./img/Balinese.jpg",
    "./img/Bengal.jpg","./img/Bombay.jpg",
    "./img/British-Shorthair.jpg","./img/Calico.jpg",
    "./img/Exotic-Shorthair.jpg","./img/Havana-Brown.jpg",
    "./img/Hello-Kitty.jpg","./img/Himalayan.jpg",
    "./img/Maine-Coon.jpg","./img/Norwegian-Forest-Cat.jpg",
    "./img/Persian.jpg","./img/Ragdoll.jpg","./img/Scottish-Fold.jpg",
    "./img/Siamese.jpg","./img/Siberian.jpg","./img/Sphynx.jpg",
    "./img/Tabby-Cat.jpg","./img/Torty.jpg","./img/Turkish-Angora.jpg"
  ]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  function displayCats(){
    const cardContainer= document.getElementById('cardContainer');
    cardContainer.innerHTML='';
    const shuffledArray = catArray.slice();
   
    let n = shuffledArray.length;
    while (n > 0) {
      const randomIndex = Math.floor(Math.random() * n);
      [shuffledArray[n - 1], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[n - 1]];
      n--;
    }
    for (const element of shuffledArray) {
      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'card');
      cardDiv.setAttribute('id', element);
      cardDiv.addEventListener('click', catClick)

      const picBoxDiv = document.createElement('div');
      picBoxDiv.setAttribute('id', 'picBox');

      const catImg = document.createElement('img');
      catImg.setAttribute('class', 'catPic');
      catImg.setAttribute('src', `${element}`);
      catImg.setAttribute('id', element);
      catImg.setAttribute('alt', '');

      picBoxDiv.appendChild(catImg);

      const catNameH4 = document.createElement('h4');
      catNameH4.setAttribute('class', 'catName');
      catNameH4.setAttribute('id', element);
      let revisedName= element.slice(6);
      let finalName= revisedName.slice(0,-4);
      catNameH4.textContent=finalName

      cardDiv.appendChild(picBoxDiv);
      cardDiv.appendChild(catNameH4);

      const cardContainer= document.getElementById('cardContainer');
      cardContainer.appendChild(cardDiv);
    }
  }
  function catClick(element){
    let click= element.target.id;
    if (clickArray.includes(click)===true){
      console.log('you lose')
    }
    else{
      displayCats();
      incrementScore();
      clickArray.push(click);
      console.log(clickArray);
   }
  }
  const handleGameOver = () => {
    setGameOver(true);
  };
  // useEffect(() => {
  //   incrementBestScore();
  // }, [score]);

  return (
    <div className="App">
      <ScoreBoard 
        score ={score}
        //bestScore= {bestScore}
      />
      <CatCard
        displayCats={displayCats}
        catArray={catArray}
        handleGameOver={handleGameOver}
      />
    </div>
  );
}

export default App;
