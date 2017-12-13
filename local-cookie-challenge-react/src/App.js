import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

      </div>
    );
  }
  componentDidMount () {
    axios.get('localhost:3001/auth')
  .then((response) => {
    this.setState( {
      pets: response.data
    })
    console.log('Getting response!')
    console.log(response);
  })
  .catch((error) => {
    console.log('Whoops')
    console.log(error);
  });
axios.get('/api/owners')
  .then((response) => {
    this.setState( {
      owners: response.data
    })
    console.log('Getting response!')
    console.log(response);
  })
  .catch((error) => {
    console.log('Whoops!')
    console.log(error);
  })
}
  }
}

export default App;
