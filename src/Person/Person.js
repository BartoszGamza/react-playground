import React from 'react'
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} y. o.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.input}/>
    </div>
  )
}

export default person