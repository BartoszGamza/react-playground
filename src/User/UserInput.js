import React from 'react'
import './UserInput.css'

const userinput = (props) => {
  return (
    <div>
      <input className="UserInput" type="text" onChange={props.changed} value={props.value}/>
    </div>
  )
}

export default userinput