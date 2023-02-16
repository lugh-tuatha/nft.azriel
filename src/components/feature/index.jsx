import './feature.css'
import Button from '../button'
import inspace from '../../assets/image/banner/NFTInSpace.png'
function Feature() {
  return (
    <div className='featureContainer'>
      <img className='nftLogo' src={inspace} alt="" />
      <h1>NFT InSpace<i class="verified1 bi bi-patch-check-fill"></i></h1>
      <h5>By AzrielPublishing<i class="verified2 bi bi-patch-check-fill"></i><br/>8808 items - 0.125 ETH</h5>
      <div className="action-btns">
        <button className="btn-gray text-uppercase">Minting now</button>
        <div>
          <button className="btn-gray mr-4"><i class="bi bi-bell"></i></button>
          <button className="btn-gray">View Drop</button>
        </div>
      </div>
    </div>
  )
}

export default Feature;