import React, {Component} from 'react'
import IncorrectCard from './IncorrectCard.js'

class IncorrectQuestContainer extends Component {
  constructor() {
    super()
    this.state = {
      userQuestions: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users/${this.props.user}`)
      .then(resp => resp.json())
      .then(questions => this.setState({userQuestions: questions.user_questions}))
  }

  incorrectQuestions = () => {
    let question
    if (this.state.userQuestions !== null) {
      question = this.state.userQuestions.filter(obj => obj.answeredCorrectly === false)

    }
    return question
  }



  render(){
    console.log(this.state.userQuestions);
    // this.incorrectQuestions()
    console.log(this.props);

    return(
      <div>Hello form IncorrectQuestContainer
        <IncorrectCard questions={this.incorrectQuestions()}/>
      </div>
    )
  }

}

export default IncorrectQuestContainer
