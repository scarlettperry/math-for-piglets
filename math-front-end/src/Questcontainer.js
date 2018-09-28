import React, {Component} from 'react'
import Questbutton from './Questbutton'
import Questcard from './Questcard'
import Createquest from './Createquest'
import IncorrectQuestContainer from './IncorrectQuestContainer'

class Questcontainer extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <div>
        <Questbutton />
        <Questcard />
        <Createquest />
        <IncorrectQuestContainer />
      </div>
    )
  }

}

export default Questcontainer
