import React, {Component} from 'react'

class Input extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <form onSubmit={(event)=>{this.props.submit(event,this.props.question)}}>
          <input type="text" />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Input
