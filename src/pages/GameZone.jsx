import { useState } from "react"; 
import GameCards from "../components/gameCards";
import blackJackGame from '../assets/image/games/blackjack.png';

const cardImages = [
  { "src": "../assets/image/memory-game/art-inspo.png" },
  { "src": "../assets/image/memory-game/art-digital-art.png" },
  { "src": "../assets/image/memory-game/miami-art.png" },
  { "src": "../assets/image/memory-game/nft-culture.png" },
  { "src": "../assets/image/memory-game/punks.png" },
  { "src": "../assets/image/memory-game/retro.png" },
]

export default function memoryGame() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards
  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  console.log(cards, )
  
  return(
    <div>
      <h1>Magic Match</h1>
      <button onClick={shuffledCards}>New Game</button>
    </div>
  )
}


