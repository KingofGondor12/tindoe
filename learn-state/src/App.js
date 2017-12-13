import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      clicked: 0
    }
  }

  buttonClicked = () => {
    console.log('CLICKY!!!!!')
    this.setState(prevState => ({
      clicked: ++prevState.clicked
    }));
  }

  render() {
    return (
      <div className="App">
        <p>
          You have clicked the button { this.state.clicked } times!
        </p>
        <button onClick={this.buttonClicked}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default App;
