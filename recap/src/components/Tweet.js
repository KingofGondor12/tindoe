import React, { Component } from 'react';

class Tweet extends Component {
  render () {
    return (
      <div className="tweet">
        <p>
          { this.props.message }
        </p>
        <em>
          { this.props.author }
        </em>
        <p id="timeago">
        { this.props.timeago }
        </p>
      </div>
    )
  }
};

export default Tweet
