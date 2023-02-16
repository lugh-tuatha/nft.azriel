import "./singleCard.css"

import backCard from "../../assets/image/memory-game/back-card.png";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled){
      handleChoice(card)
    }
  }

  return(
    <div className="memoryCard" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front"/>
        <img className="back" src={backCard} onClick={handleClick} alt="card back" />
      </div>
    </div>
  )
}