import React, { useState, useEffect, Suspense } from "react";
import catArray from "./imageRepo";
import Card from './Card';
//const Card = React.lazy(() => import('./Card'));

function Board(props) {
  //const [clickedElements, setClickedElements] = useState([]);
  //const catArray= imgArray.map((arr) => arr.slice());
//   const handleClickedElements = (elem) => {
//     setClickedElements(clickedElements.concat(elem));
//   };

//   const cleanClickedElements = () => {
//     setClickedElements([]);
//   };
  const shuffledArray = catArray.slice();
  let n = shuffledArray.length;
  while (n > 0) {
    const randomIndex = Math.floor(Math.random() * n);
    [shuffledArray[n - 1], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[n - 1]];
    n--;
  }
  let cards = shuffledArray.map((obj) => {
    return (
      <Card
        key={obj.text}
        //handleClickedElements={handleClickedElements}
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url={obj.image}
        name={obj.text}
      />
    );
  });


  return (
    <div className="board" id="cardContainer">
        <Suspense>{cards}</Suspense>
    </div>
  );
}

export default Board;
