import React, { Component } from 'react';
import './App.css';
import FancyButton from './components/FancyButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FancyButton /><br />
        <FancyButton /><br />
        <FancyButton />
      </div>
    );
  }
}

export default App;
