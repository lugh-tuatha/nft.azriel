import { useState, useEffect } from 'react';

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
                    symbol
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
      {collections.map(collection => (
        <div key={collection.node.address}>
          <h2>{collection.node.name}</h2>
          <img src={collection.node.unsafeOpenseaImageUrl} alt={collection.node.name} />
          <p>Circulating Supply: {collection.node.circulatingSupply}</p>
          <p>Symbol: {collection.node.symbol}</p>
          <p>Total Sales: {collection.node.stats.totalSales}</p>
          <p>Average: {collection.node.stats.average}</p>
          <p>Floor: {collection.node.stats.floor}</p>
          <p>Volume: {collection.node.stats.volume}</p>
        </div>
      ))}
    </div>
  );
}

export default Collection;
