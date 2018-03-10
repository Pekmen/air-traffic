import React, { Component } from 'react';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Air Traffic Test</h1>
      </div>
    );
  }
}

export default App;
