import { useState } from "react"; 
import artInspo from "../assets/image/memory-game/art-inspo.png";
import miamiArt from "../assets/image/memory-game/miami-art.png";
import nftCulture from "../assets/image/memory-game/nft-culture.png";
import punks from "../assets/image/memory-game/punks.png";
import retro from "../assets/image/memory-game/retro.jpg";
import backCard from "../assets/image/memory-game/back-card.png";

const cardImages = [
  { "src": artInspo },
  { "src": backCard },
  { "src": miamiArt},
  { "src": nftCulture },
  { "src": punks },
  { "src": retro },
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

  return(
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffledCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front"/>
              <img className="back" src={backCard} alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}