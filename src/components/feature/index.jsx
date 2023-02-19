import './feature.css'
import inspace from '../../assets/image/banner/NFTInSpace.png'
function Feature() {
  return (
    <div className='featureContainer'>
      <img className='nftLogo' src={inspace}/>
      <h1>NFT Cosmonaut<i className="verified1 bi bi-patch-check-fill"></i></h1>
      <h5>By AzrielPublishing<i className="verified2 bi bi-patch-check-fill"></i><br/>8808 items - 0.125 ETH</h5>
      <p className="desc">NFT Cosmonaut (collector's edition) is open only to collectors of Azriel NFTs. One entry per eligible NFT. One purchase per user. Holders of this NFT will be snapshotted at a later date and will be eligible to receive a physical print from the Azriels.</p>
      <div className="action-btns">
        <button className="btn-gray text-uppercase">Minting now</button>
        <div>
          <button className="btn-gray mr-4"><i className="bi bi-bell"></i></button>
          <button className="btn-gray">View Drop</button>
        </div>
      </div>
    </div>
  )
}

export default Feature;