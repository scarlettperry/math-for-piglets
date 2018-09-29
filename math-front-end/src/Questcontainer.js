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

  filterQuestion = () => {
    let questionSent
    if (this.state.operation === "") {
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

  handleSubmit = (event,questionObj) => {
    event.preventDefault()
    let UserInput = parseInt(event.target[0].value)
    let answer = parseInt(math.eval(questionObj.equation).toFixed(0))

    if (UserInput===answer) {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.props.user, question_id: questionObj.id, answeredCorrectly: true})
      })
    }
    else {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.props.user, question_id: questionObj.id, answeredCorrectly: false})
      })
    }
    this.props.updateAnsweredQuestionsState(questionObj.id)
    console.log(UserInput, answer);
    // *********
    // fetch a new question in the same category after a state change might render a new question
    // *********
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
