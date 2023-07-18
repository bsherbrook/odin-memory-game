import happyCat from '../img/happy-cat.jpg'

function isGameOver(props){
    return(
        <div>
            <img 
            src={happyCat}
            id='youWinCat'
            alt='Happy kitty says You Win!'
            />
            <div id='endGameText'>    
                <h1>Victory! You did it!</h1>
                <button id='endGameButton' onClick={props.handleWin}>Try Again?</button>
            </div>
        </div>
    )
}

export default isGameOver