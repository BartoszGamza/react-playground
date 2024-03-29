import React, { Component } from 'react';
import classes from'./App.css';
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Bart', age: 21} ,
      { id: 2, name: 'Filop', age: 22}
    ],
    username: 'something',
    showPersons: true
  }

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
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
    const obj = [...this.state.persons] //creates a copy not a pointer!
    obj.splice(index, 1)
    this.setState({persons: obj})
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePerson.bind(this, person.id)}
              key={person.id}
              input={(event) => this.changeName(event, person.id)} />
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
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let AssignedClasses = []

    if (this.state.persons.length <= 2) {
      AssignedClasses.push('red')
    }

    if (this.state.persons.length <=1) {
      AssignedClasses.push('bold')
    }

    return (
      <StyleRoot>
      <div className={classes.App}>
        <h1>hello</h1>
        <p className={AssignedClasses}>Test</p>
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
      </StyleRoot>
    );
  }
}

export default Radium(App);
