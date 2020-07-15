import React, { Component } from 'react';
import Navbar from './sections/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
