import React, { Component } from 'react';
import Profile from './components/Profile'
import './App.css';

class App extends Component {
  state = {
    viewed: 0,
    maxViews: 10
  }
  incrementViewed = () => {
    console.log('Increased viewed by one')
    this.setState(prevState => ({
      viewed: prevState.viewed + 1
    }))
  }
  render() {
    const {viewed, maxViews} = this.state
    return (
      <div className="App">
        <Progress info value={viewed} max={maxViews}/>
        <p>
          You have viewed {viewed}/{maxViews} profiles
        </p>
        <Profile incrementViewed={this.incrementViewed} viewed={viewed} maxViews={maxViews}/>
      </div>
    );
  }
}

export default App;
