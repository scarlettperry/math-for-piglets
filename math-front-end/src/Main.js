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
      user_id: 3,
      piggyTotal: 0
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
      // fetch to post piggy total
      // *********

    }
    else {
      fetch('http://localhost:3000/api/v1/user_questions',{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({user_id: this.state.user_id, question_id: questionObj.id, answeredCorrectly: false})
      })
    }

    // *********
    // fetch a new question in the same category after
    // *********
  }

  render(){
    console.log(this.state);
    return(
      <div className="App wrapper">
        <Nav/>
        <Questcontainer
          user={this.state.user_id}
          questions={this.filteredQuestionsForUser()}
          submit={this.handleSubmit}
          />
        <Piggybank piggyTotal={this.state.piggyTotal}/>
        <Calculator/>
      </div>
    )
  }

}

export default Main
