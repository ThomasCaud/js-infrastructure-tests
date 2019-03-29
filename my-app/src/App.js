import React, { Component } from 'react';
import Addition from './components/Addition';
import Pow from './components/Pow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Addition/>
        <Pow/>
      </div>
    );
  }
}

export default App;
