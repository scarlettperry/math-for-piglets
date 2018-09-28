import React, {Component} from 'react'
import Input from './Input.js'

class Questcard extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        Hi from Questcard, I'm in Questcontainer!
        <Input/>
      </div>
    )
  }

}

export default Questcard
