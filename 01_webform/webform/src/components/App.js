import React, { Component } from 'react';
import Navbar from "./Navbar";
// import Footer from;
import Content from "./Content";

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
