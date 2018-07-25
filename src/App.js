import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Person name="Bart" age="21" />
      </div>
    );
  }
}

export default App;
