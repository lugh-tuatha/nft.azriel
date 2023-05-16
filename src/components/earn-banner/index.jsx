import { useState } from 'react'
import './index.css';
import Lottie from "lottie-react"
import AnimationData from "../../assets/lottie/109445-nft-futuristic-animation.json"
import logo from '../../assets/image/logo/aZRIEL-Silver.png'
function EarnBanner() {
  return (
    <div className="earn-banner-component">
      <div className="earn-banner-container ">
        <div className="row">
          <div className="col-12 col-sm-6"> 
            <h1 className="heading">Earn up to <span className="gradient-text">24.51% APY</span> <br/>with AZRIEL</h1>
            <p className="slogan">Committing your AZRIEL tokens to the trading platform allows you to earn a percentage of the daily trading fees in ETH. This not only generates passive income, but also incentivizes you to participate in the platform's activities, ultimately driving its growth and success. And as an added bonus, committing your tokens to the platform may also earn you additional AZRIEL, further increasing your potential returns.</p>
            <button className='btn-start'>Start Earning</button>
          </div>
          <div className="col-12 col-sm-6 text-end text-center">
            <Lottie animationData={AnimationData} className='earn-hero mx-auto'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarnBanner;