import badCat from '../img/bad-cat.jpg'

function isGameOver(props){
    return(
        <div>
            <img 
            src={badCat}
            id='gameOverCat'
            alt='Scary kitty says game over'
            />
            <div id='endGameText'>
                <h1>Game Over You Lose!</h1>
                <button id='endGameButton' onClick={props.restartGame}>Try Again?</button>
            </div>
        </div>
    )
}

export default isGameOver