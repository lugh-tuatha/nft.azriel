import { useState } from 'react'
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

import Header from './components/header';
import Cards from './components/cards';
import TeamCards from './components/team-cards';

import './App.css'

function App() {
  return (
    <div className='app'>
      <Header />
      <Cards />
      <TeamCards />
    </div>
  )
}

export default App
