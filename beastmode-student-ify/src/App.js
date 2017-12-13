import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/Home'
import EditStudent from './components/EditStudent'
import NewStudent from './components/NewStudent'
import Students from './components/Students'
import NoMatch from './components/NoMatch'
import './App.css';

class App extends Component {
  state = {
    students: [
      {id: 1, firstName: "Jonathan", lastName: "Kanus", age: 18, year: "12"},
      {id: 2, firstName: "Jenna", lastName: "Kanus", age: 17, year: "11"},
      {id: 3, firstName: "Jaeger", lastName: "Bearson", age: 18, year: "12"}
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => (
              <Home students={this.state.students}/>
            )}/>
            <Route exact path="/students/new" component={() => (
              <NewStudent students={this.state.students}/>
            )}/>
            <Route path="/students/:id" component={() => (
              <Students students={this.state.students}/>
            )}/>
            <Route exact path="/students/:id/edit" component={() => (
              <EditStudent students={this.state.students}/>
            )}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }

  // componentDidMount = () => {
  //   localStorage.setItem([
  //   ])
  // }

}

export default App;
