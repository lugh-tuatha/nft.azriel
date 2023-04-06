import { useState, useEffect } from 'react';
import './index.css'

import * as Fa from "react-icons/fa";

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
                      totalSales
                      average
                      floor
                      volume
                    }
                    circulatingSupply
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
      <div className="trending-collection">
        <div className="row trending-collection-title px-2 py-3">
          <div className="col-lg-4">
            <p>COLLECTION</p>
          </div>
          <div className="col-lg-2">
            <p>SALES FLOOR</p>
          </div>
          <div className="col-lg-1">
            <p>SALES</p>
          </div>
          <div className="col-lg-3">
            <p>AVERAGE</p>
          </div>
          <div className="col-lg-2">
            <p>VOLUME</p>
          </div>
        </div>
        {collections.map(collection => (
          <div key={collection.node.address}>
            <div className="row trending-collection-body p-2">
              <div className="col-lg-4">
                <div className='d-flex gap-2'>
                  <img src={collection.node.unsafeOpenseaImageUrl} alt={collection.node.name}/>
                  <div>
                    <p className='fw-semibold col-name'>{collection.node.name}</p>
                    <p className='supply'>Circulating Supply: {collection.node.circulatingSupply}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 my-auto">
                <p><Fa.FaEthereum /> {collection.node.stats.floor}</p>
              </div>
              <div className="col-lg-1 my-auto">
                <p>{collection.node.stats.totalSales}</p>
              </div>
              <div className="col-lg-3 my-auto">
                <p><Fa.FaEthereum /> {collection.node.stats.average}</p>
              </div>
              <div className="col-lg-2 my-auto">
                <p><Fa.FaEthereum /> {collection.node.stats.volume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
