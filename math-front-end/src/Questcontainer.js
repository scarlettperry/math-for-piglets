import React, {Component} from 'react'
import Questbutton from './Questbutton'
import Questcard from './Questcard'
import Createquest from './Createquest'
import IncorrectQuestContainer from './IncorrectQuestContainer'
// import { Container, Header } from 'semantic-ui-react'
// import * as math from 'mathjs'



class Questcontainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operation: "",
      pendingQuestion: props.pendingQuestion
    }
  }

  //logs the value of the selected operation
  handleClick = (event) => {
    this.setState({
      operation: event.target.name
    })
  }

  handlePendingQuestion = () => {
    this.setState({pendingQuestion: {}})
  }

  //shows a question based on
  //this.state.pendingQuestion OR
  //this.state.operation
  filterQuestion = () => {
    let questionSent
    if (Object.keys(this.state.pendingQuestion).length !== 0) {
      questionSent = this.state.pendingQuestion
      // this.setState({pendingQuestion: {}})
    }
    else if(this.state.operation === "") {
      let num = Math.floor(Math.random()* this.props.questions.length)
      questionSent = this.props.questions[num]
    }
    else {
      let filterQuestions = this.props.questions.filter(question => question.operation === this.state.operation)
      let randomIndex = Math.floor(Math.random() * filterQuestions.length)
      questionSent = filterQuestions[randomIndex]
    }
    return questionSent
  }

  render(){
    // console.log(this.state)
    return (
      <div className="Questcontainer">
        <Questbutton click={this.handleClick}/>
        <Questcard
          question={this.filterQuestion()}
          submit={this.props.submit}
          handlePendingQuestion={this.handlePendingQuestion}
        />
        <Createquest />
      </div>
    )
  }

}

export default Questcontainer
