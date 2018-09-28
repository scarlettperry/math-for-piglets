import React, {Component} from 'react'
import Nav from './Nav.js'
import Questcontainer from './Questcontainer.js'
import Piggybank from './Piggybank'
import Calculator from './Calculator'

class Main extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className="App wrapper">
        <Nav/>
        <Questcontainer/>
        <Piggybank/>
        <Calculator/>
      </div>
    )
  }

}

export default Main
