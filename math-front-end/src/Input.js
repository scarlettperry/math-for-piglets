import React, {Component} from 'react'

class Input extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        {/* MAKE USER FRIENDLY <h3>{"round questions up .5 or above, else round down."}</h3> */}
        <form onSubmit={(event)=>{this.props.submit(event, this.props.question)}}>
          <input type="text" />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Input
