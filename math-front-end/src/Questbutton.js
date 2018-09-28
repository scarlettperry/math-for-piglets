import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class Questbutton extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <Button size='big' color='teal'>+</Button>
        <Button size='big' color='teal'>-</Button>
        <Button size='big' color='teal'>÷</Button>
        <Button size='big' color='teal'>x</Button>
        <Button size='big' color='teal'>PEMDAS</Button>
      </div>
    )
  }
}

export default Questbutton
