import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Form from './components/FormInput'

class App extends Component {

// Defines initial state

  state = {
    edit: false,
    firstName: 'Jenna',
    lastName: 'McAlister',
    profileAvatar: 'https://randomuser.me/api/portraits/women/34.jpg'
  }

// When the random button is clicked

  onClickRandom = () => {
    console.log('Random!')
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let randomuser = data.results[0];
        let newFirstName = toTitleCase(randomuser.name.first);
        let newLastName = toTitleCase(randomuser.name.last);
        let newProfileAvatar = randomuser.picture.large
        this.setState({
          firstName: newFirstName,
          lastName: newLastName,
          profileAvatar: newProfileAvatar
        });
      })
  }

// When the edit button is clicked

  onEditToggle = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }

// Live updates when edits are made

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const { firstName, lastName, profileAvatar, edit } = this.state;
    return (
      <div className="App">
        <Profile
          firstName={ firstName }
          lastName={ lastName }
          profileAvatar={ profileAvatar }
        />
        <button onClick={ this.onEditToggle }>
          Edit Profile
        </button>
        <br />

        {edit &&
          <div id="edit_profile">
            <Form
            firstName={ firstName }
            lastName={ lastName }
            profileAvatar={ profileAvatar }
            onChange={ this.onChange }
            />
            <button onClick={ this.onClickRandom }>
              Random
            </button>
          </div>
        }

      </div>
    );
  }
}

export default App;

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
