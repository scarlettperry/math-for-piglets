import React, {Component} from 'react'
import Nav from './Nav.js'
import Questcontainer from './Questcontainer.js'
import Piggybank from './Piggybank'
import Calculator from './Calculator'
import * as math from 'mathjs'

class Main extends Component {
  constructor() {
    super()
    this.state={
      questions: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(questions => this.setState({questions}))
  }      

  render(){
    return(
      <div className="App wrapper">
        <Nav/>
        <Questcontainer
          questions={this.state.questions}
          />
        <Piggybank/>
        <Calculator/>
      </div>
    )
  }

}

export default Main
