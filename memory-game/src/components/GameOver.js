import happyCat from '../img/happy-cat.jpg'
import badCat from '../img/bad-cat.jpg'

function isGameOver(props){
    return(
        <div>
            <img 
            src={badCat}
            id='gameOverCat'
            alt='Scary kitty says game over'
            />
            <h1>Game Over You Lose!</h1>
            <button onClick={props.restartGame}>Try Again?</button>
        </div>
    )
}

export default isGameOver