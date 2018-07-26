import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    persons: [
      { name: 'Bart', age: 21} ,
      { name: 'Filop', age: 22}
    ],
    username: 'something'
  }

  switchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21} ,
        { name: 'Filop', age: 72}
      ]
    })
    console.log('names changed')
  }

  changeName = (event) => {
    this.setState({
      persons: [
        { name: 'Bart', age: 21} ,
        { name: event.target.value, age: 72}
      ]
    })
  }

  userChangedInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>hello</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          input={this.changeName}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchName.bind(this, 'Max!')} //bind is better option than below
          input={this.changeName}>
          My Hobby is reading
        </Person>
        <button
          style={style}
          onClick={() => this.switchName('Maximillian!!')}>
          Switch name
        </button>
        <UserInput
          changed={this.userChangedInput}
          value={this.state.username}
          >
        </UserInput>
        <UserOutput
          data={this.state.username}
          >
        </UserOutput>
      </div>
    );
  }
}

export default App;
