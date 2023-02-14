import './gameCards.css'

import blackJackGame from '../../assets/image/games/blackjack.png'

import Button from '../button'

function GameCards(){
  return (
    <div className='gameCardContainer'>
      <div className="gameDescContainer">
        <h1>Black Jack game</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, id aut! Maxime. Lorem ipsum dolor sit.</p>
        <Button />
      </div>

      <div className="gameContainer">
        <img src={blackJackGame} alt="blackjack game banner" />
      </div>

    </div>
  )
}

export default GameCards