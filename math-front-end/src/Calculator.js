import React, {Component} from 'react'
import * as math from 'mathjs'

class Calculator extends Component {

  state={
    calculatorInput: "",
    error: null
  }

  handleCalculatorInput = (event) =>{

    let receivedInput = event.target.id
    let specialEvent =["delete","enter","ac"]
    if(!specialEvent.includes(receivedInput)){
    this.setState(prevState => ({calculatorInput: prevState.calculatorInput + receivedInput}))
    }else if (receivedInput==="enter") {
        try {
        this.setState({calculatorInput: math.eval(this.state.calculatorInput).toString()})
        } catch (error) {
        this.setState({error: error, calculatorInput: "error" });
        }
      }
    else if (receivedInput ==="delete") {
      this.setState({calculatorInput: this.state.calculatorInput.slice(0,-1)})
    }else if (receivedInput ==="ac") {
      this.setState({calculatorInput: ""})
    }
  }

  render(){
    return(
      <div className="Calculator" onClick={this.handleCalculatorInput}>
        Hello I'm a Calculator beep boop
        <br/>
        <br/>
        <label>{this.state.calculatorInput}</label>
        <br/>
        <br/>
        {[...Array(10).keys()].map(num => <button id={num}>{num}</button>)}
        {["(",")","^","*","/","+","-","delete","ac","enter"].map(variable => <button id={variable}>{variable}</button>)}
      </div>
    )
  }

}

export default Calculator
