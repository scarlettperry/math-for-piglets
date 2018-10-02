import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class Questbutton extends Component {

  render(){
    return(
      <div>
        <i class="huge blue long arrow alternate right icon arrow1"></i><span>Chose a different operation or solve the question on the screen</span><i class="huge blue long arrow alternate left icon arrow2"></i>
        <div onClick={this.props.click}>
          <Button name="addition" size='massive' color='teal'>+</Button>
          <Button name="subtraction" size='massive' color='teal'>-</Button>
          <Button name="division" size='massive' color='teal'>÷</Button>
          <Button name="multiplication" size='massive' color='teal'>x</Button>
          <Button name="pemdas" size='massive' color='teal'>PEMDAS</Button>
        </div>
      </div>
    )
  }
}

export default Questbutton
