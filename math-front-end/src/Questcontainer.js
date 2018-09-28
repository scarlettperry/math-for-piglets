import React, {Component} from 'react'
import Questbutton from './Questbutton'
import Questcard from './Questcard'
import Createquest from './Createquest'
import IncorrectQuestContainer from './IncorrectQuestContainer'
import { Container, Header } from 'semantic-ui-react'

class Questcontainer extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div className="Questcontainer">
          <Questbutton />
          <Questcard />
          <Createquest />
          <IncorrectQuestContainer />
      </div>
    )
  }

}

export default Questcontainer
