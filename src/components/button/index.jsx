import { useState } from 'react'
import './index.css'

function Btn({buttonName}) {
  return (
    <div>
      <button className="custom-btn btn-3"><span>{buttonName}</span></button>
    </div>
  )
}

export default Btn;