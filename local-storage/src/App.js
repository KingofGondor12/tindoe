import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    clicked: 0
  }

  incrementClicked = () => {
    const newTotalClicks  = this.state.clicked + 1
    this.setState({
      clicked: newTotalClicks
    })
    localStorage.setItem("clicked", newTotalClicks)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.incrementClicked} >I have been clicked {this.state.clicked} times!</button>
      </div>
    );
  }

  componentDidMount = () => {
    // Load total clicks
    const initialClicks = Number(localStorage.getItem("clicked"), 10)
    // Set initlal state
    this.setState({
      clicked: initialClicks
    })
  }

}

export default App;
