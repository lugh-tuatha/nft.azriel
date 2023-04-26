import { useState, useEffect } from 'react';

import './cards.css'
import ethLogo from "../../assets/image/logo/eth-logo.png"

import * as Fa from "react-icons/fa";

function Cards() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const apiKey = 'e0e94693b5b84b9d8464d6e38f69c07c';

    fetch('https://graphql.icy.tools/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        query: `
          query TrendingCollections {
            trendingCollections(orderBy: SALES, orderDirection: DESC) {
              edges {
                node {
                  address
                  ... on ERC721Contract {
                    name
                    stats {
                      floor
                      volume
                    }
                    unsafeOpenseaImageUrl
                  }
                }
              }
            }
          }
        `
      })
    })
    .then(response => response.json())
    .then(data => {
      setCollections(data.data.trendingCollections.edges);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <div className="row mt-3 jkz">
        {collections.map(collection => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
            <div className="nftCardsContainer">
              <div className="nftCard">
                <div className="thumbnail">
                  <img src={collection.node.unsafeOpenseaImageUrl} alt={collection.node.name} className='img-fluid'/>
                </div>
                <div className='cardBody'>
                  <p>{collection.node.name}</p>
                </div>
                <div className="details">
                  <div className="type">
                    <img className="icon" src={ethLogo} height="30px"/>
                    <div>
                      <p className='m-0 vol'>floor</p>
                      <p className='m-0 fw-bold price'>{collection.node.stats.floor}</p>
                    </div>
                  </div>
                  <div className="type">
                    <img className="icon" src={ethLogo} height="30px"/>
                    <div>
                      <p className='m-0 vol'>volume</p>
                      <p className='m-0 fw-bold price'>{collection.node.stats.volume}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Cards;