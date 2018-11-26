import React, {Component} from 'react'
import Input from './Input.js'

// import { Card } from 'semantic-ui-react'

class Questcard extends Component {

  render(){
    return(
      <div>
        <br/>
        <br/>
        <h3 className="question-equation">{this.props.question.equation} </h3>
        <Input
          question={this.props.question}
          submit={this.props.submit}
          handlePendingQuestion={this.props.handlePendingQuestion}
          isCorrect={this.props.isCorrect}
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
