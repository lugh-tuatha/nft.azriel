import Cards from "../components/cards";
import nft1 from "../assets/image/nft-list/nft-1.png"
import nft2 from "../assets/image/nft-list/nft-2.png"


export default function Marketplace() {

  const nfts = [
    {
      id: 1,
      nftName: "Blackjack Game",
      highestBid: "12 eth",
      image: nft1
    },
    {
      id: 2,
      nftName: "Aceeee",
      highestBid: "loremg over 21.",
      image: nft2
    }
  ];

  return (
    <div>
      <p>Marketplace</p>
      {nfts.map(nft => (
        <Cards key={nft.id} nftName={nft.nftName} highestBid={nft.highestBid} image={nft.image} />
      ))}
    </div>
  );
}