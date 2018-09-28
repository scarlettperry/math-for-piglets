import React, {Component} from 'react'
import Questbutton from './Questbutton'
import Questcard from './Questcard'
import Createquest from './Createquest'
import IncorrectQuestContainer from './IncorrectQuestContainer'
import { Container, Header } from 'semantic-ui-react'

class Questcontainer extends Component {
  constructor() {
    super()
    this.state={
      questions: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/questions")
    .then(res => res.json())
    .then(questions => this.setState({questions}))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert(event.target[0].value)
  }

  randomQuestion = () => {
    alert("hi")
  }

  render(){
    console.log(this.state);
    return (
      <div className="Questcontainer">
        <Questbutton />
        <Questcard questions={this.state.questions} handleSubmit={this.handleSubmit}/>
        <Createquest />
        <IncorrectQuestContainer />
      </div>
    )
  }

}

export default Questcontainer
