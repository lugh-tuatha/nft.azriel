import React from 'react';

import azriel from '../../assets/image/logo/azreil.png';
import searchIcon from '../../assets/image/logo/search.png'
import eth from '../../assets/image/logo/eth.png'

import './header.css'

import { Link } from 'react-router-dom';

function Header(){

  return (
    <div>
      <div className='header'>
        <div className="logoContainer">
          <img src={azriel} alt="brand logo" className='azrielLogo' onClick={() => this.setState({servePage: "dashboard"})}/>
        </div>

        <div className="searchBar">
          <div className="searchIconContainer">
            <img src={searchIcon} alt="magnifying icon for search bar" />
          </div>
          <input className='searchInput' placeholder='Collection, item....'/>
        </div>

        <div className='d-flex gap-4 mx-4'>
          <Link to="/"><p className='my-auto'>Dashboard</p></Link>
          <Link to="/marketplace"><p className='my-auto'>Marketplace</p></Link>
          <Link to="/gamezone"><p className='my-auto'>Game zone</p></Link>
        </div>

        <div className="balanceContainer ">
          <img src={eth} alt="eth logo" />
          <p>0.515 ETH</p>
        </div>

        {/* <div>
          <div className="menu-btn__burger">
            
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;