import React, { Component } from 'react';
import './App.css';
import Tweet from './components/Tweet';

const tweets = [
  {id: 0, message: "Howdy", author: "Sheeple", timeago: "4 Minutes Ago"},
  {id: 1, message: "Woof", author: "Catdog", timeago: "20 Minutes Ago"}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
        Tweeter
        </h1>
        {
          tweets.map((myTweet) => {
            return <Tweet key={myTweet.id} {...myTweet} />
          })
        }
      </div>
    );
  }
}

export default App;
