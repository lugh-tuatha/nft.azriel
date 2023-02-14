import { useState } from 'react'
import $ from 'jquery';
import reactLogo from './assets/svg/react.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD

import Btn  from './components/button';
import Header from './components/header';
=======
import Btn  from './components/button'
import Cards from './components/cards'
>>>>>>> 9ccdbcc73b320b78069ebdd39a78b35e0b9cf0c4

import './App.css'

import Navbar from './components/navbar';

function App() {
  return (
    <div className='app'>
      <Header />
      <Btn />
      <Cards />
    </div>
  )
}

export default App
