import { useState } from 'react'
import './index.css';
import logo from '../../assets/image/logo/aZRIEL-Silver.png'
function EarnBanner() {
  return (
    <div className="earn-banner-component">
      <div className="earn-banner-container">
        <div className="row">
          <div className="col-6">
            <h1 className="heading">Earn up to <span className="gradient-text">24.51% APY</span> <br/>with AZRIEL</h1>
            <p className="slogan">Commit AZRIEL tokens to earn a share of daily trading fees in ETH, in addition to even more AZRIEL.</p>
            <button className='btn-start'>Start Earning</button>
          </div>
          <div className="col-6 text-center">
            <img className='logo' src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarnBanner;