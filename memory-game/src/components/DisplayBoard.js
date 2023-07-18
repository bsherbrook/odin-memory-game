import React, { useState, useEffect, Suspense } from "react";
import catArray from "./imageRepo";
import Card from './Card';
//const Card = React.lazy(() => import('./Card'));

function Board(props) {
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
