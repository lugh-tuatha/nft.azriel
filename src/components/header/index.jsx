import React, {Component} from 'react';

import azrielLogo from '../../assets/image/logo/azriel-logo.png';
import searchIcon from '../../assets/image/logo/search.png'
import themeSwitchIcon from '../../assets/image/logo/theme-switch.png'
import eth from '../../assets/image/logo/eth.png'

import Marketplace from '../../pages/Marketplace';
import GameZone from '../../pages/GameZone';
import Dashboard from '../../pages/Dashboard';

import './header.css'

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      servePage: "dashboard"
    }
  }
  render() {
    let content = "";
    let nav = (
      <div className='header'>
        <div className="logoContainer">
          <img src={azrielLogo} alt="brand logo" className='azrielLogo' onClick={() => this.setState({servePage: "dashboard"})}/>
        </div>

        <div className="searchBar">
          <div className="searchIconContainer">
            <img src={searchIcon} alt="magnifying icon for search bar" />
          </div>
          <input className='searchInput' placeholder='Collection, item....'/>
        </div>

        <div className='headerItems'>
          <p onClick={() => this.setState({servePage: "dashboard"})}>Dashboard</p>
          <p onClick={() => this.setState({servePage: "marketplace"})}>Marketplace</p>
          <p onClick={() => this.setState({servePage: "gamezone"})}>Game zone</p>
        </div>

        <div className="headerActions">
          <div className="themeSwitchContainer">
            <img src={themeSwitchIcon} alt="" />
          </div>
        </div>
        
        <div className="balanceContainer">
          <img src={eth} alt="eth logo" />
          <p>0.515 ETH</p>
        </div>

      </div>
    )

    if (this.state.servePage == "dashboard"){
      content = <Dashboard />;
    }else if (this.state.servePage == "marketplace"){
      content = <Marketplace />;
    }else if (this.state.servePage == "gamezone"){
      content = <GameZone />;
    }
    return (
      <div>
      {nav}
      {content}
      </div>
    );
  }
}

export default Header;