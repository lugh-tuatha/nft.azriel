import './footer.css'
import azrielLogo from '../../assets/image/logo/azriel-logo.png';
import azriel from '../../assets/image/logo/azreil.png';

function Footer() {
return (
    <footer className="site-footer">
      <div className="container-fluid f-container pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify f-desc">static website where you can keep track of the latest NFT prices and enjoy playing fun memory games. Our website is designed to provide an easy-to-use platform for anyone interested in the world of non-fungible tokens and gaming.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Useful links</h6>
            <ul className="footer-links">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Game zone</a></li>

            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Learn</h6>
            <ul className="footer-links">
              <li><a href="https://opensea.io/learn/what-are-nfts" target={'_blank'}>What is an NFT?</a></li>
              <li><a href="https://opensea.io/learn/how-to-buy-nft" target={'_blank'}>How to buy an NFT</a></li>
              <li><a href="https://opensea.io/learn/what-are-nft-drops" target={'_blank'}>What are NFT drops?</a></li>
              <li><a href="https://opensea.io/learn/what-is-blockchain" target={'_blank'}>What is a blockchain?</a></li>
              <li><a href="https://opensea.io/learn/what-is-web3" target={'_blank'}>What is web3?</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-fluid f-container">
        <div className="row ">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
        <a href="#"> nft.azriel</a>.
            </p>
          </div>

        </div>
      </div>
</footer>
)
}

export default Footer;