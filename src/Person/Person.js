import React from 'react'
import classes from'./Person.css'

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} y. o.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.input} value={props.name}/>
    </div>
  )
}

export default person