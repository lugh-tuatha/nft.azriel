import Cards from "../components/cards";

import cyberCorg from "../assets/image/nft-list/cyber-korg.avif"
import journey from "../assets/image/nft-list/journey.png"
import mekaDriver from "../assets/image/nft-list/meka-driver.avif"
import pirateNation from "../assets/image/nft-list/pirate.png"

export default function Marketplace() {

  const nfts = [
    {
      id: 1,
      nftName: "Cyber Corg",
      highestBid: "12 eth",
      image: cyberCorg
    },
    {
      id: 2,
      nftName: "Aceeee",
      highestBid: "0.0568 ETH",
      image: journey
    },
    {
      id: 3,
      nftName: "Meka driver",
      highestBid: "1 eth",
      image: mekaDriver
    },
    {
      id: 4,
      nftName: "Pirate",
      highestBid: "0.22 eth",
      image: pirateNation
    }
  ];

  return (
    <div className="marketplaceContainer">
      {nfts.map(nft => (
        <Cards key={nft.id} nftName={nft.nftName} highestBid={nft.highestBid} image={nft.image} />
      ))}
    </div>
  );
}