import { useState } from 'react'
import $ from 'jquery';
import reactLogo from './assets/svg/react.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Btn  from './components/button'

import './App.css'

import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Btn />
    </div>
  )
}

export default App
