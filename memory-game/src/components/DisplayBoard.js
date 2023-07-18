import React, { useState, useEffect } from "react";
import imgArray from "./imageRepo";
// import Card from './Card';
const Card = React.lazy(() => import('./Card'));

function Board() {
  const [clickedElements, setClickedElements] = useState([]);
  const catArray= imgArray.map((arr) => arr.slice());
  const handleClickedElements = (elem) => {
    setClickedElements(clickedElements.concat(elem));
  };

  const cleanClickedElements = () => {
    setClickedElements([]);
  };
  let cards = imagesArray[index].map((obj) => {
    return (
      <Card
        key={obj.text}
        handleClickedElements={handleClickedElements}
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url={obj.image}
        name={obj.text}
      />
    );
  });


  return (
    <div className="App">
      
    </div>
  );
}

export default Board;
