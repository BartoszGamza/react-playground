import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Bart', age: 21} ,
      { name: 'Filop', age: 22}
    ]
  }

  switchName = () => {
    this.setState({
      persons: [
        { name: 'Rafal', age: 21} ,
        { name: 'Filop', age: 72}
      ]
    })
    console.log('names changed')
  }

  render () {
    return (
      <div className="App">
        <h1>hello</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchName}>
          My Hobby is reading
        </Person>
        <button onClick={this.switchName}>Switch name</button>
      </div>
    );
  }
}

export default App;
