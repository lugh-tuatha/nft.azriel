import './gameCards.css'

import blackJackGame from '../../assets/image/games/blackjack.png'

import Button from '../button'

function GameCards({title, description, image}){
  return (
    <div className='gameCardContainer'>
      <div className="gameDescContainer">
        <h1>{title}</h1>
        <p>{description}</p>
        <Button />
      </div>

      <div className="gameContainer">
        <img src={image} alt={title} />
      </div>

    </div>
  )
}

export default GameCards