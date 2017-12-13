import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Field, Control, Button } from 'reactbulma';
import Register from './Components/Register'
import LoginForm from './Components/LoginForm'
import Products from './Components/Products'

class App extends Component {

  states = [
    { token: '' },
    { loggedIn: false },
    { email: '' },
    { password: '' }
  ];

  render() {
    return (
      <div className="App">
      {
        if (!loggedIn ? <LoginForm /> : <Products />)
      }

        <Register />

      </div>
    );
  }

}

export default App;
