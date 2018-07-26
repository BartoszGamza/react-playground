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

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby is reading</Person>
        <button>Switch name</button>
      </div>
    );
  }
}

export default App;
