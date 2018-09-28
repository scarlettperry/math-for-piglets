import React, {Component} from 'react'
import Input from './Input.js'
import * as math from 'mathjs'

class Questcard extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        {this.props.questions.map(question => <h3>{question.equation} answer: {(math.eval(question.equation))}</h3>)}
        <Input handleSubmit={this.props.handleSubmit}/>
      </div>
    )
  }

}

export default Questcard
