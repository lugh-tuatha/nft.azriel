import './cards.css'
import Button from "../button"

function Cards({ nftName, highestBid, image }) {

  return (
    <main className="cardContainer">
      <div className="wrapper">
        <div className="card">
          <div className="card-head">
            <img src={image} alt={nftName} className="img-fluid"/>
            <Button buttonName="Buy"/>
          </div>

          <div className="card-body">
            <div className="wrapper-flex mb">
            </div>

            <h4 className="product-name">
              <p>{nftName}</p>
            </h4>
            <a href="#" className="latest-bid">Highest bid 1/20</a>

            <div className="wrapper-flex">
              <div className="highest-bid">{highestBid}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cards;