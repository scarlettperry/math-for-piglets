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
      questions: [],
      answeredQuestions: [],
      user_id: 10
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(questions => this.setState({questions}))

    fetch(`http://localhost:3000/api/v1/users/${this.state.user_id}`)
    .then(res => res.json())
    .then(data => data.user_questions.map(question => question.question_id))
    .then(answerQuestionsIds => this.setState({answeredQuestions: answerQuestionsIds}))
  }

  filteredQuestionsForUser = () =>{
    return this.state.questions.filter(question => !this.state.answeredQuestions.includes(question.id))
  }

  updateAnsweredQuestions = (id) =>{
    return this.setState({answeredQuestions: [...this.state.answeredQuestions, id]})
  }

  render(){
    console.log(this.state.answeredQuestions);
    return(
      <div className="App wrapper">
        <Nav/>
        <Questcontainer
          user={this.state.user_id}
          questions={this.filteredQuestionsForUser()}
          updateAnsweredQuestionsState={this.updateAnsweredQuestions}
          />
        <Piggybank/>
        <Calculator/>
      </div>
    )
  }

}

export default Main
