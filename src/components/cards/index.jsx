import './cards.css'

function Cards() {
    return (
      <div>
        <main className="container mt-5">
      <div className="wrapper">
        <div className="card-rotate-bg"></div>

        <div className="card">
          <div className="card-head">
            <img
              src="https://assets-prd.ignimgs.com/2022/02/19/pokemon-tcg-live-preview-1645242791988.jpg"
              alt=""
              className="product-img"
            />
            <button className="bid-btn">Place Bid</button>
          </div>

          <div className="card-body">
            <div className="wrapper-flex mb">
              <div className="bid-info">
                <div className="img-box">
                  <img
                    src="https://i.pinimg.com/564x/30/30/96/3030964a760f37a6847ff59a88cc60a3.jpg"
                    alt=""
                  />
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/5ceec355142c500008f42068/0x0.jpg?format=jpg&crop=1950,1950,x32,y257,safe&width=1200"
                    alt=""
                  />
                  <img
                    src="https://media.vogue.co.uk/photos/5d544f8584bc2a0008c64693/1:1/w_1280,h_1280,c_limit/original"
                    alt=""
                  />
                </div>

                <a href="#">10+ Place Bid.</a>
              </div>

              <button className="share-btn">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </button>
            </div>

            <h4 className="product-name">
              <a href="#">NFT</a>
            </h4>
            <a href="#" className="latest-bid">Highest bid 1/20</a>

            <div className="wrapper-flex">
              <div className="last-bid">0.244wETH</div>
              <div className="react">
                <ion-icon name="heart-outline"></ion-icon> <span>322</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
      </div>
    )
}

export default Cards;