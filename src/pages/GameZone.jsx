import { useEffect, useState } from "react"; 
import artInspo from "../assets/image/memory-game/art-inspo.png";
import miamiArt from "../assets/image/memory-game/miami-art.png";
import nftCulture from "../assets/image/memory-game/nft-culture.png";
import punks from "../assets/image/memory-game/punks.png";
import retro from "../assets/image/memory-game/retro.jpg";
import digitalArt from "../assets/image/memory-game/digital-art.png"

import SingleCard from "../components/single-card";

const cardImages = [
  { "src": artInspo },
  { "src": digitalArt },
  { "src": miamiArt},
  { "src": nftCulture },
  { "src": punks },
  { "src": retro },
]

export default function memoryGame() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo){
      
      if (choiceOne.src === choiceTwo.src) {
        console.log('those cards match')
        resetTurn()
      } else {
        console.log("do not match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return(
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffledCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
  )
}