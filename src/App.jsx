import { useState } from 'react'
import $ from 'jquery';
import reactLogo from './assets/svg/react.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

import Btn  from './components/button';
import Header from './components/header';

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
