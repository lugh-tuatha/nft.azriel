import React from "react";

import Cards from "../components/cards";
import Footer from "../components/footer";
import Header from "../components/header";
import "./pages.css"


export default function Marketplace() {
  return (
    <>
    <Header />
      <div className="marketplace-container">
        <Cards />
      </div>

      <Footer />
    </>

  );
}