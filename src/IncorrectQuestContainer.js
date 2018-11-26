import React, {Component} from 'react'
import IncorrectCard from './IncorrectCard.js'

class IncorrectQuestContainer extends Component {



  //filters all questions to return just the inccorect questions
  allIncorrectQuestions = () => {
    return this.props.allQuestions.filter(question=> this.props.incorrectQuestions.includes(question.id))
  }

  //returns a component with a single question object as a prop
  singleIncorrectQuestion = () => {
    let questions = this.allIncorrectQuestions()
    return questions.map(question => <IncorrectCard question={question} handleClick={this.props.handleClick}/>)
  }

  render(){
    console.log(this.props);
    return(
      <div className="IncorrectQuestContainer flex-container">
        {this.singleIncorrectQuestion()}
      </div>
    )
  }

}

export default IncorrectQuestContainer
