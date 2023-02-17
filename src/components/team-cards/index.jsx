import { useState } from 'react'
import './team-card.css'


function TeamCards() {
  return (
    <div className="teamCardsComponent">
      <div className="wrapper">
        <div className="card">
          <img src="./src/assets/image/frame/teamcards.jpg" />
          <div className="info">
            <h1>Ace</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed, inventore dignissimos ab quod iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCards;