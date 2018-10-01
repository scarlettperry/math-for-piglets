import React, {Component} from 'react'
import Questbutton from './Questbutton'
import Questcard from './Questcard'
import Createquest from './Createquest'
import IncorrectQuestContainer from './IncorrectQuestContainer'
import * as math from 'mathjs'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class Questcontainer extends Component {
  constructor() {
    super()
    this.state = {
      operation: ""
    }
  }

  //logs the value of the selected operation
  handleClick = (event) => {
    this.setState({
      operation: event.target.name
    })
  }

  //shows a question based on this.state.operation
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

  render(){
    console.log(this.props);
    return (
      <Router>
        <React.Fragment>
          <div className="Questcontainer">
            <Questbutton click={this.handleClick}/>
            <Questcard
              question={this.filterQuestion()}
              submit={this.props.submit}/>
            <Createquest />
            <Route path="/incorrect-questions"
              render={
                routerProps =>
                <IncorrectQuestContainer
                  {...routerProps}
                  user={this.props.user}
                  allQuestions={this.props.allQuestions}
                  incorrectQuestions={this.props.incorrectQuestions}
                />
              }/>
          </div>
        </React.Fragment>
      </Router>
    )
  }

}

export default Questcontainer
