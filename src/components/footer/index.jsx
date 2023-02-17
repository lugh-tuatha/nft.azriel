import './footer.css'
import azrielLogo from '../../assets/image/logo/azriel-logo.png';
import azriel from '../../assets/image/logo/azreil.png';

function Footer() {
  return (
    <footer className='Footer'>
        <div className="container">
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="brand-section">
                        <img className='brand-logo' src={azriel} alt="brand logo" />
                        <p className="arr">©2023 Azriel. All Rights Reserved.</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="row">
                        <div className="col-lg-4">
                            <h5 className="menu-title">Marketplace</h5>
                            <ul className='menu'>
                                <li>
                                    <a href="#">Popular collections</a>
                                </li>
                                <li>
                                    <a href="#">Launchpad</a>
                                </li>
                                <li>
                                    <a href="#">Auctions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="menu-title">Azriel Games</h5>
                            <ul className='menu'>
                                <li>
                                    <a href="#">All Games</a>
                                </li>
                                <li>
                                    <a href="#">Launch With Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="menu-title">Resources</h5>
                            <ul className='menu'>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">API</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">System Status</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                                <li>
                                    <a href="#">Trust & Safety</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Copyright Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;