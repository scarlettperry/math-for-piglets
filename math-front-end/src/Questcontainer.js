import React, {Component} from 'react'
import Questbutton from './Questbutton'
import Questcard from './Questcard'
import Createquest from './Createquest'
import IncorrectQuestContainer from './IncorrectQuestContainer'
import { Container, Header } from 'semantic-ui-react'
import * as math from 'mathjs'


class Questcontainer extends Component {
  constructor() {
    super()
    this.state = {
      operation: ""
    }
  }

  handleClick = (event) => {
    this.setState({
      operation: event.target.name
    })
  }

  //todo: show a question they haven't answered before
  filterQuestion = () => {
    let questionSent
    if (this.state.operation === "") {
      questionSent = this.props.questions[0]
    }
    else {
      let filterQuestions = this.props.questions.filter(question => question.operation === this.state.operation)
      let randomIndex = Math.floor(Math.random() * filterQuestions.length)
      questionSent = filterQuestions[randomIndex]
    }
    return questionSent
  }

  render(){

    return (
      <div className="Questcontainer">
        <Questbutton click={this.handleClick}/>
        <Questcard
          question={this.filterQuestion()}
          submit={this.props.submit}/>
        <Createquest />
        <IncorrectQuestContainer />
      </div>
    )
  }

}

export default Questcontainer
