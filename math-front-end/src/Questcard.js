import React, {Component} from 'react'
import Input from './Input.js'

class Questcard extends Component {
  // constructor() {
  //   super()
  // }

  render(){
    return(
      <div>
        <br/>
        <br/>
        <h3 className="question-equation">{this.props.question.equation} </h3>
        <Input
          question={this.props.question}
          submit={this.props.submit}
          />
      </div>
    )
  }
}

Questcard.defaultProps = {
  question: {
    equation: "1+1",
  }
}

export default Questcard
