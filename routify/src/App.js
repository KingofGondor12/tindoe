import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class App extends Component {
  state = {
    loggedIn: false
  }

  toggleLogIn = () => {
    this.setState((prevState) => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <p>
            Welcome to my website
          </p>
          <hr />
          <button className={this.state.loggedIn ? 'loggedIn' : ''} onClick={this.toggleLogIn}>
            {this.state.loggedIn ? 'Log out' : 'Log in'}
          </button>
          <p>
            {this.state.loggedIn && 'You are logged in!'}
          </p>
          <hr />
          <strong>
            Navigation:
          </strong>
          <Link to="/">Home</Link>
          <Link to="/hello">Hello</Link>
          <Link to="/hello/you">Hello You</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/toodles">Toodles</Link>

          <hr />

          <Route exact path="/hello" component={Hello} />
          <Route path="/hello/:name" component={HelloYou} />
          <Route path="/contact" component={() => {
            if (this.state.loggedIn) {
              return <Contact />
            } else {
              return <Redirect to="/login" />
            }
          }} />
          <Route path="/toodles" component={Goodbye} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

const Hello = () => (
  <h1>
    Hello World!
  </h1>
)

const Goodbye = () => (
  <h1>
    Toodles!
  </h1>
)

const Contact = () => (
  <div>
    <h1>
      Contact me!
    </h1>
    <p>
      You can contact me via e-mail, or by phone. Another alternative is by mail.
    </p>
  </div>
)

const HelloYou = ({match}) => (
  <div>
    <h1>
      Yes, you {match.params.name}! Not me!
    </h1>
    <p>
      HELLO!
    </p>
  </div>
)

const Login = () => (
  <p> Tech Debt Department </p>
)

export default App;
