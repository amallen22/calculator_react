import React, { Component } from 'react';
import Screen from './Screen';
import Key from './Key';
import './Calculator.css'

class Calculator extends Component {
  
  constructor(props) {
    
    super(props)
    
    this.state = {
      value: "0"
    }
  }

  onKeyPress(keyValue) {
    console.log('pressed: ' + keyValue)

    let finalValue;

    if(this.state.value === "0"){
      finalValue = keyValue
    } 
    else {
      finalValue = this.state.value + keyValue
    }

    // const current = this.state.value
    // const finalValue = current == "0" ? keyValue : current + keyValue

    this.setState({ value: finalValue })
  }

  calculate() {
    const result = eval(this.state.value)
    this.setState({ value: result })
  }

  render() {
    return (
      <div className="calculator">
        <Screen value={ this.state.value }/>
        <div className="keys">
          <div className="key-row"> 
            <Key value="1" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="2" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="3" onPress={ (k) => this.onKeyPress(k) } />
          </div>
          <div className="key-row"> 
            <Key value="4" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="5" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="6" onPress={ (k) => this.onKeyPress(k) } />
          </div>
          <div className="key-row"> 
            <Key value="7" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="8" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="9" onPress={ (k) => this.onKeyPress(k) } />
          </div>
          <div className="key-row"> 
            <Key value="0" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="+" onPress={ (k) => this.onKeyPress(k) } />
            <Key value="=" onPress={ (k) => this.calculate(k) } />
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator