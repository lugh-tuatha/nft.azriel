import { useEffect, useState } from "react"; 
import artInspo from "../assets/image/memory-game/art-inspo.png";
import miamiArt from "../assets/image/memory-game/miami-art.png";
import nftCulture from "../assets/image/memory-game/nft-culture.png";
import punks from "../assets/image/memory-game/punks.png";
import retro from "../assets/image/memory-game/retro.jpg";
import digitalArt from "../assets/image/memory-game/digital-art.png"

import SingleCard from "../components/single-card";
import Footer from "../components/footer";

const cardImages = [
  { "src": artInspo, matched: false},
  { "src": digitalArt, matched: false},
  { "src": miamiArt, matched: false},
  { "src": nftCulture, matched: false},
  { "src": punks, matched: false},
  { "src": retro, matched: false},
]

export default function memoryGame() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // shuffle cards
  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
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
      setDisabled(true)
      
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card;
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])



  // reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start a new game automatically
  useEffect(() => {
    shuffledCards()
  }, [])

  return(
    <>
      <div className="gameZoneContainer">
        <div className="gameZoneHeader">
          <h1 className="text-center">Magic Match</h1>
          <button onClick={shuffledCards} className="newGameBtn">New Game</button>
        </div>

        <div className="card-grid">
          {cards.map(card => (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled}/>
          ))}
        </div>
        <p>Turns: {turns}</p>
      </div>
      <Footer />
    </>
  )
}