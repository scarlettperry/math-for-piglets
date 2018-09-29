import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class Questbutton extends Component {
  // constructor() {
  //   super()
  // }

  render(){
    return(
      <div onClick={this.props.click}>
        <Button name="addition" size='massive' color='teal'>+</Button>
        <Button name="subtraction" size='massive' color='teal'>-</Button>
        <Button name="division" size='massive' color='teal'>÷</Button>
        <Button name="multiplication" size='massive' color='teal'>x</Button>
        <Button name="pemdas" size='massive' color='teal'>PEMDAS</Button>
      </div>
    )
  }
}

export default Questbutton
