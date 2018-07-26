import React from 'react'

const useroutput = (props) => {
  const style = {
    border: '1px solid green',
    padding: '16px',
    margin: 'auto',
    maxWidth: '100px'
  }

  return (
    <div>
      <p style={style}>{props.data}</p>
    </div>
  )
}

export default useroutput