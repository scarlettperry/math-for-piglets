import React, {Component} from 'react'

class Input extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>Hello I'm Input, I live in Questcard
        <form onSubmit={this.props.handleSubmit}>
          <label>Enter your answer here:</label>
          <input type='text'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Input
