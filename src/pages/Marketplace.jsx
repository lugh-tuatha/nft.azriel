import React from "react";

import Cards from "../components/cards";
import Footer from "../components/footer";
import Header from "../components/header";
import "./pages.css"

import nfts from '../data/nft-list/nftList'

export default function Marketplace() {
  return (
    <>
    <Header />
      <div className="marketplaceContainer">
        {nfts.map(nft => (
          <Cards key={nft.id} nftName={nft.nftName} price={nft.price} image={nft.image} days={nft.days}/>
        ))}
      </div>

      <Footer />
    </>

  );
}