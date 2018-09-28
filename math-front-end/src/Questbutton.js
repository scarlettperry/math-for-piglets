import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class Questbutton extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div onClick={this.props.click}>
        <Button name="addition" size='big' color='teal'>+</Button>
        <Button name="subtraction" size='big' color='teal'>-</Button>
        <Button name="division" size='big' color='teal'>÷</Button>
        <Button name="multiplication" size='big' color='teal'>x</Button>
        <Button name="pemdas" size='big' color='teal'>PEMDAS</Button>
      </div>
    )
  }
}

export default Questbutton
