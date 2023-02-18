import { useState } from 'react'
import './button.css'

function Btn({buttonName}) {
  return (
    <button className="btn-gray">{buttonName}</button>
  )
}

export default Btn;