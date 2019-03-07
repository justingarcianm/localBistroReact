import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import Find from './components/Find'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Menu />
        <Find />
        <Footer />
      </div>
    );
  }
}

export default App;
