import React, {Component} from 'react'
import Nav from './Nav.js'
import Questcontainer from './Questcontainer.js'
import IncorrectQuestContainer from './IncorrectQuestContainer'
import Piggybank from './Piggybank'
import Calculator from './Calculator'
import * as math from 'mathjs'
import caChing from './sound/ca_ching.mp3'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answeredQuestions: [],
      user_id: 3,
      piggyTotal: 0,
      incorrectQuestionIds: [],
      pendingQuestion: [],
      isCorrect: ""
    }
  }

  //fetching all questions, user's answered question ids', and user's incorrect question ids
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(questions => this.setState({questions}))

    fetch(`http://localhost:3000/api/v1/users/${this.state.user_id}`)
    .then(res => res.json())
    .then(data => data.user_questions.map(question => question.question_id))
    .then(answerQuestionsIds => this.setState({answeredQuestions: answerQuestionsIds}))

    fetch(`http://localhost:3000/api/v1/users/${this.state.user_id}`)
      .then(resp => resp.json())
      .then(data => data.user_questions.filter(question=> question.answeredCorrectly === false))
      .then(data => data.map(question => question.question_id))
      .then(id => this.setState({incorrectQuestionIds: id}))
  }

  // returning questions the user hasn't answered
  filteredQuestionsForUser = () =>{
    return this.state.questions.filter(question => !this.state.answeredQuestions.includes(question.id))
  }

  updateAnsweredQuestions = (id) =>{
    return this.setState({answeredQuestions: [...this.state.answeredQuestions, id]})
  }

  // playSound=() => {
  //   this.myRef = React.createRef()
  //   return (
  //     <audio ref={this.myRef} src={caChing} autoPlay/>
  //   )
  // }
  //evaluating input and POSTING T or F
  //setting state for the piggy total when input is correct
  //setting state for incorrect question ids
  handleSubmit = (event, answer_input,questionObj, resetAnswer) => {
    event.preventDefault()
    let UserInput = parseInt(answer_input, 10)
    let answer = parseInt(math.eval(questionObj.equation).toFixed(0),10)

    this.setState({pendingQuestion: {}})

    if (UserInput===answer) {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.state.user_id, question_id: questionObj.id, answeredCorrectly: true})
      })

      this.setState({isCorrect: true})
      resetAnswer()
      this.setState((prevState)=>{
        return {piggyTotal: prevState.piggyTotal + 2}
      })

      // this.playSound


      // *********
      // fetch to post new Piggy total?
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

      this.setState({isCorrect: false})

    }
    this.updateAnsweredQuestions(questionObj.id)

  }

  handleClick = (questionObj) => {
    // console.log(questionObj);
    this.setState({pendingQuestion: questionObj})
  }

  piggyTotalChange = () =>{
    this.setState(prevState=> ({piggyTotal: prevState.piggyTotal -1}) )
  }

  render(){
    // console.log(this.state.isCorrect)
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
                submit={this.handleSubmit}
                pendingQuestion={this.state.pendingQuestion}
                isCorrect={this.state.isCorrect}
              />
            }/>
            <Route path="/incorrect-questions/" render={
              routerProps =>
              <IncorrectQuestContainer
                {...routerProps}
                user={this.state.user}
                allQuestions={this.state.questions}
                incorrectQuestions={this.state.incorrectQuestionIds}
                handleClick={this.handleClick}
              />
            }/>
            <Piggybank piggyTotal={this.state.piggyTotal}/>
            <Calculator piggyTotal={this.state.piggyTotal} handlePiggyTotalChange={this.piggyTotalChange}/>
          </div>
        </React.Fragment>
      </Router>
    )
  }

}

export default Main
