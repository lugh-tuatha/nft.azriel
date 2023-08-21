import React, { useState } from "react";
import './faq.css'

import { Collapse } from 'react-collapse';
import FaqsData from '../../data/faqs-data/faqs-data'

import * as Ai from 'react-icons/ai'

function Faq() {
  const [faqsData, setFaqsData] = useState(FaqsData);

  const toggleCollapse = (index) => {
    const updatedFaqsData = [...faqsData];
    updatedFaqsData[index].isOpened = !updatedFaqsData[index].isOpened;
    setFaqsData(updatedFaqsData);
  };
  return (
    <>
      {faqsData.map((faqs, index) => (
        <div key={index} className="faqs-container mb-3" onClick={() => toggleCollapse(index)}>
          <div className="d-flex align-items-center justify-content-between m-0">
            <p>{faqs.question}</p>
            {
              faqs.isOpened ? <Ai.AiOutlineMinus color="#fff" size={30} /> : <Ai.AiOutlinePlus color="#fff" size={30}/> 
            }
          </div>
          <Collapse isOpened={faqs.isOpened}>
            <div className="">
              <p className="answer">{faqs.answer}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </>
  );
}

export default Faq;