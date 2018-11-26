import React, {Component,Fragment} from 'react'
import * as math from 'mathjs'
import { Button } from 'semantic-ui-react'

class Calculator extends Component {

  state={
    calculatorInput: "0",
    showCalc: false,
    error: null
  }

  handleCalculatorInput = (event) =>{

    let receivedInput = event.target.id
    let specialEvent =["del","enter","AC"]
    if(!specialEvent.includes(receivedInput)){
    this.setState(prevState => ({calculatorInput: prevState.calculatorInput + receivedInput}))
    }else if (receivedInput==="enter") {
        try {
        this.setState({calculatorInput: math.eval(this.state.calculatorInput).toString(), showCalc: !this.state.showCalc})
        } catch (error) {
        this.setState({error: error, calculatorInput: "error" });
        }
      }
    else if (receivedInput ==="del") {
      this.setState({calculatorInput: this.state.calculatorInput.slice(0,-1)})
    }else if (receivedInput ==="AC") {
      this.setState({calculatorInput: ""})
    }
  }

  handleCalculatorReveal = () =>{
    if(this.props.piggyTotal > 0){
      this.setState({showCalc: !this.state.showCalc})
      this.props.handlePiggyTotalChange()
    }else{
      alert("insufficient funds!")
    }
  }

  render(){
    return(
      <div className="Calculator" onClick={this.handleCalculatorInput}>
        {this.state.showCalc ? (
        <Fragment>
          <Fragment>
          <div class="fluid big grey ui label">{this.state.calculatorInput}</div>
          <div className="fluid ui buttons">
          {["AC","del","^","*"].map(num => <button className="ui button" id={num}>{num}</button>)}
          </div>
          <div className="fluid ui buttons">
          {[7,8,9,"+"].map(num => <button className="ui button" id={num}>{num}</button>)}
          </div>
          <br/>
          <div className="fluid ui buttons">
          {[4,5,6,"-"].map(num => <button className="ui button" id={num}>{num}</button>)}
          </div>
          <br/>
          <div className="fluid ui buttons">
          {[1,2,3,"/"].map(num => <button className="ui button" id={num}>{num}</button>)}
          </div>
          <br/>
          <div className="fluid ui buttons">
          {["(",")",0].map(num => <button className="ui button" id={num}>{num}</button>)}
          <button className="ui orange button" id={"enter"}>{"enter"}</button>
          </div>
          <br/>

          </Fragment>
        </Fragment>
      ) :
        <Fragment>
          <div class="fluid big grey ui label">{this.state.calculatorInput}</div>
          <br/>
          <button class="fluid positive ui button" onClick={this.handleCalculatorReveal}>Click me to reveal Calculator, costs $1!</button>
        </Fragment>
        }
      </div>
    )
  }

}

export default Calculator
