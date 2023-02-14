import GameCards from "../components/gameCards"

import blackJackGame from '../assets/image/games/blackjack.png'


export default function GameZone() {
  return (
    <div>
      <p>Gamezone</p>
      <GameCards 
        title="Blackjack Game"
        description="Blackjack is a card game where the objective is to beat the dealer by having a hand of cards that is worth more points than the dealer's hand, without going over 21."
        image={blackJackGame}
      />
    </div>
  )
}