import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import { Input, Panel } from 'reactbulma'
import Task from './components/Task'
import axios from 'axios'

// let currentID = 1
// const genID = () => ++currentID

class App extends Component {

  state = {
    tasks: [],
    searchPhrase: ''
  }

onChangeQuery = (event) => {
// Update state with search query
  this.setState({
    searchPhrase: event.target.value
  })
}

addTask = (event) => {
// Stop the browser from submitting the form
  event.preventDefault();
  const { tasks, searchPhrase} = this.state
  const existingTask = tasks.find((todo) => todo.name === searchPhrase)

  if (existingTask) {
    alert("That task already exists. Please try again.")
    return;
  }

  if (searchPhrase.trim() === '') {
    alert("That's not a task! Please try again.")
    return;
  }

  axios.post('/api/tasks', {
    name: this.state.searchPhrase,
    date: '',
    complete: ''
  })
  .then((response) => {
    //  Update the state with the new tasks
    this.setState(prevState => ({
      tasks: [...this.state.tasks, response.data],
    // Clear the input box to be empty
      searchPhrase: ''
    }))
  })
}

onToggleComplete = (id) => {
  const foundIndex =  this.state.tasks.findIndex(task => task.id === id)
  this.setState(prevState => {
    const tasks = prevState.tasks
    tasks[foundIndex].complete = !tasks[foundIndex].complete
    return {tasks}
  })
}

  render() {

    const { tasks, searchPhrase} = this.state
    console.log(tasks)
    const filteredTasks = tasks.filter(myTask => myTask.name.includes(searchPhrase)).reverse()

    return (
      <div className="App">
        <Header
          totalIncomplete={ tasks.filter(task => !task.complete).length }
          totalComplete={ tasks.filter(task => task.complete).length }/>
        <form onSubmit={ this.addTask }>
          <Input
            primary
            placeholder="Search / Add A Todo!"
            value={ searchPhrase }
            onChange={ this.onChangeQuery }
          />
        </form>
        <Panel>
          <Panel.Heading>
            Todo
          </Panel.Heading>
          {
            filteredTasks.map(todo => <Task id={todo.id} name={ todo.name } time={todo.time} complete={todo.complete} onClick={() => this.onToggleComplete(todo.id)}/>)
          }
        </Panel>
      </div>
    )};
    componentDidMount() {
      axios.get('/api/tasks')
        .then((response) => {
          this.setState({
            tasks: response.data
          })
          console.log('Successful Response')
          console.log(response)
        })
        .catch((error) => {
          console.log('Whoops')
          console.log(error)
        })

  }
}

export default App;
