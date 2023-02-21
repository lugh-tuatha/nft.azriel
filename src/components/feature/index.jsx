import './feature.css'
import inspace from '../../assets/image/banner/NFTInSpace.png';
import astronaut from '/src/assets/image/banner/astronaut.png';
import rocket from '/src/assets/image/banner/rocket.png';
import Button from '../button';

function Feature() {
  return (
    <div className='featureContainer'>
      <div className="row">
        <div className="col-12 col-lg-4 d-block d-lg-none art">
          <img className="rocket" src={rocket} alt="rocket" />
          <img className="astronaut" src={astronaut} alt="astronaut" />
        </div>
        <div className="col-12 col-lg-4">
          <div className="profile-details">
            <img className='nftLogo' src={inspace}/>
            <h1>NFT Cosmonaut<i className="verified1 bi bi-patch-check-fill"></i></h1>
            <h5>By AzrielPublishing<i className="verified2 bi bi-patch-check-fill"></i><br/>8808 items - 0.125 ETH</h5>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block art">
          <img className="rocket" src={rocket} alt="rocket" />
          <img className="astronaut" src={astronaut} alt="astronaut" />
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block">
          <p className="desc">NFT Cosmonaut (collector's edition) is open only to collectors of Azriel NFTs. One entry per eligible NFT. One purchase per user. Holders of this NFT will be snapshotted at a later date and will be eligible to receive a physical print from the Azriels.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-sm-6">
          <button className="btn-gray text-uppercase">Minting now</button>
        </div>
        <div className="col-12 col-sm-6 d-flex d-none d-sm-block">
          <div className="action-btns">
            <button className="btn-gray mr-4"><i className="bi bi-bell"></i></button>
            <button className="btn-gray">View Drop</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;