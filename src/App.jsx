import { useState } from 'react'
import $ from 'jquery';

import reactLogo from './assets/svg/react.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

import Navbar from './components/navbar';
import Btn  from './components/button'

import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Btn />
    </div>
  )
}

export default App
