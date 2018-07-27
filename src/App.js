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
    username: 'something',
    showPersons: true
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

  togglePersons = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  deletePerson = (index) => {
    const obj = this.state.persons
    obj.splice(index, 1)
    this.setState({persons: obj})
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePerson.bind(this, index)}
              key={index} />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            input={this.changeName}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchName.bind(this, 'Max!')} //bind is better option than below
            input={this.changeName}>
            My Hobby is reading
          </Person> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>hello</h1>
        {persons}
        <button
          style={style}
          onClick={this.togglePersons}>
          Switch view
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
