import React from 'react';
import './Screen.css'

//las props de value de calculator.js
const Screen = (props) => {
  return (
      <div className="screen">
          {props.value}
      </div>
  )
}

export default Screen