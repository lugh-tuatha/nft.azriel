import './cards.css'
import Button from "../button"

import ethLogo from "../../assets/image/logo/eth-logo.png"

function Cards({ nftName, price, image, days }) {

  return (
    <div className="nftCardsContainer">
      <div className="nftCard">
        <div className="thumbnail">
          <img src={image} alt="image of a cube" className='img-fluid'/>
        </div>
        <div className='cardBody'>
          <h1>{nftName}</h1>
        </div>
        <div className="details">
          <div className="type">
            <img className="icon" src={ethLogo} height="30px"/>
            <p>{price}</p>
          </div>
          <div className="time">
            <div className="type">
              <img className="icon" src="https://assets.codepen.io/4479043/clock.png" height="30px"/>
              <p>{days}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cards;