import GameCards from "../components/gameCards";
import blackJackGame from '../assets/image/games/blackjack.png';

export default function GameZone() {
  const games = [
    {
      title: "Blackjack Game",
      description: "Blackjack is a card game where the objective is to beat the dealer by having a hand of cards that is worth more points than the dealer's hand, without going over 21.",
      image: blackJackGame
    }
  ];

  return (
    <div>
      <p>Gamezone</p>
      {games.map(game => (
        <GameCards title={game.title} description={game.description} image={game.image} />
      ))}
    </div>
  );
}
