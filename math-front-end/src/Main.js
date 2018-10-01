import React, {Component} from 'react'
import Nav from './Nav.js'
import Questcontainer from './Questcontainer.js'
import Piggybank from './Piggybank'
import Calculator from './Calculator'
import * as math from 'mathjs'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      answeredQuestions: [],
      user_id: 2,
      piggyTotal: 0,
      incorrectQuestionIds: []
    }
  }

  //fetching all questions and user's answered question ids'
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(questions => this.setState({questions}))

    fetch(`http://localhost:3000/api/v1/users/${this.state.user_id}`)
    .then(res => res.json())
    .then(data => data.user_questions.map(question => question.question_id))
    .then(answerQuestionsIds => this.setState({answeredQuestions: answerQuestionsIds}))
  }

  // returning questions the user hasn't answered
  filteredQuestionsForUser = () =>{
    return this.state.questions.filter(question => !this.state.answeredQuestions.includes(question.id))
  }

  updateAnsweredQuestions = (id) =>{
    return this.setState({answeredQuestions: [...this.state.answeredQuestions, id]})
  }

  //evaluating input and POSTING T or F
  //setting state for the piggy total when input is correct
  //asetting state for incorrect question ids
  handleSubmit = (event,questionObj) => {
    event.preventDefault()
    let UserInput = parseInt(event.target[0].value)
    let answer = parseInt(math.eval(questionObj.equation).toFixed(0))

    if (UserInput===answer) {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.state.user_id, question_id: questionObj.id, answeredCorrectly: true})
      })

      this.setState((prevState)=>{
        return {piggyTotal: prevState.piggyTotal + 2}
      })

      // *********
      // fetch to post new Piggy total
      // *********
    }
    else {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.state.user_id, question_id: questionObj.id, answeredCorrectly: false})
      })
      .then(resp=>resp.json())
      .then(data=> this.setState({incorrectQuestionIds: [...this.state.incorrectQuestionIds, data.question_id]}))
    }
    this.updateAnsweredQuestions(questionObj.id)
    console.log(UserInput, answer);
    // *********
    // fetch a new question in the same category after a state change might render a new question
    // *********
  }

  render(){
    // console.log(this.state.incorrectQuestionIds)
    return(
      <Router>
        <React.Fragment>
          <div className="App wrapper">
            <Nav/>
            <Route exact path="/" render={
              routerProps =>
              <Questcontainer
                {...routerProps}
                user={this.state.user_id}
                questions={this.filteredQuestionsForUser()}
                allQuestions={this.state.questions}
                incorrectQuestions={this.state.incorrectQuestionIds}
                submit={this.handleSubmit}
              />
            }/>
            <Piggybank piggyTotal={this.state.piggyTotal}/>
            <Calculator/>
          </div>
        </React.Fragment>
      </Router>
    )
  }

}

export default Main
