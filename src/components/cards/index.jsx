import './cards.css'

function Cards({ nftName, highestBid, image }) {
  
  return (
    <main className="container">
      <div className="wrapper">
        <div className="card-rotate-bg"></div>

        <div className="card">
          <div className="card-head">
            <img src={image} alt={nftName}/>
            <button className="bid-btn">Place Bid</button>
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