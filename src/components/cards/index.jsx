import './cards.css'
import Button from "../button"

import ethLogo from "../../assets/image/logo/eth-logo.png"

function Cards({ nftName, price, image }) {

  return (
    <div className="nftCard">
      <div className="thumbnail">
        <img src={image} alt="image of a cube" width="350px" height="auto" />
      </div>
      <div className='cardBody'>
        <h1>{nftName}</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
      <div className="details">
        <div className="type">
          <img className="icon" src={ethLogo} height="30px"/>
          <p>{price}</p>
        </div>
        <div className="time">
          <div className="type">
            <img className="icon" src="https://assets.codepen.io/4479043/clock.png" height="30px"/>
            <p>3 days left</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;