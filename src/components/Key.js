import React from 'react';
import './Key.css'

const Key = (props) => (
  <button className="key-button" onClick={ (event) => props.onPress(props.value) } >
    { props.value }
  </button>
)

export default Key