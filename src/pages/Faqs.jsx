import React from 'react'
import './pages.css'

import Faq from '../components/faq'
import Header from '../components/header'
import Footer from '../components/footer'

function Faqs() {
  return (
    <div>
      <Header />

      <div className="faq-container mt-4">
        <Faq />
      </div>

    <div className="faq-footer sm-position-fixed position-block  bottom-0 ">
      <Footer />
    </div>
    </div>
  )
}

export default Faqs