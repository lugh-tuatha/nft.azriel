import { useState, useEffect } from 'react';
import './trending.css'

import * as Fa from "react-icons/fa";
import Button from '../button'

function Collection() {
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
    <div className="">
      <div className="row">
        {collections.slice(0, 6).map(collection => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 mb-lg-0">
            <div className="trending-collection-body p-2 rounded">
              <img src={collection.node.unsafeOpenseaImageUrl} alt={collection.node.name} className='rounded'/>
              <p className='fw-semibold my-2 title'>{collection.node.name}</p>
              <div className="d-flex justify-content-between ">
                <div className='d-flex align-items-center'>
                  <Fa.FaEthereum className='eth-icon' size={22}/> 
                  <p className='mt-1'>{collection.node.stats.floor}</p>
                </div>
                <div className='d-flex align-items-center'>
                  <Fa.FaEthereum className='eth-icon' size={22}/> 
                  <p className='mt-1'>{collection.node.stats.volume}</p>
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <button className='bid-btn'>Place Bid</button>
                <button className='buy-btn'>Buy</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
