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
      user_id: 10,
      piggyTotal: 0,
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

  handleSubmit = (event,questionObj) => {
    event.preventDefault()
    let UserInput = parseInt(event.target[0].value, 10)
    let answer = parseInt(math.eval(questionObj.equation).toFixed(0),10)

    if (UserInput===answer) {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.state.user_id, question_id: questionObj.id, answeredCorrectly: true})
      })
    }
    else {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.state.user_id, question_id: questionObj.id, answeredCorrectly: false})
      })
    }
    this.updateAnsweredQuestions(questionObj.id)
    console.log(UserInput, answer);
    // *********
    // fetch a new question in the same category after a state change might render a new question
    // *********
  }

  render(){
    console.log(this.state.answeredQuestions);
    return(
      <div className="App wrapper">
        <Nav/>
        <Questcontainer
          user={this.state.user_id}
          questions={this.filteredQuestionsForUser()}
          submit={this.handleSubmit}
          />
        <Piggybank piggyTotal={this.state.piggyTotal}/>
        <Calculator />
      </div>
    )
  }

}

export default Main
