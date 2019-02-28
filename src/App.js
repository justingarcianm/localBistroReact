import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Food from './components/Food'
import Drinks from './components/Drinks'
import Find from './components/Find'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Food />
        <Drinks />
        <Find />
        <Footer />
      </div>
    );
  }
}

export default App;
