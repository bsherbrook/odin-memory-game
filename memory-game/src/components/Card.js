import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      props.setGameOver();
    } else {
      setIsClicked(true);
      props.incrementScore();
    }
  };

  return (
    <div className='card'>
      <img className='catPic' onClick={handleClick} src={props.url} alt={props.name} />
      <h4 className='catText'>{props.name}</h4>
    </div>
  );
};

export default Card;