import React, { Component } from 'react';
class FancyButton extends Component {
  state = {
    totalClicks: 0
  }
  incrementClicks = () => {
    this.setState(prevState => ({
      totalClicks:  ++prevState.totalClicks
    }))
  }
  render() {
    let { totalClicks } = this.state
    return (
      <button onClick={this.incrementClicks}>The most fanciest of buttons! I have been clicked {totalClicks} times</button>
    )
  }
}

export default FancyButton
