import React, {Component} from 'react'

class Input extends Component {
  // constructor() {
  //   super()
  // }

  render(){
    return(
      <div>
        <br/>
        <br/>
        {/* MAKE USER FRIENDLY <h3>{"round questions up .5 or above, else round down."}</h3> */}
        <form
          onSubmit={(event)=>{this.props.submit(event, this.props.question)}}
          onSubmit={this.props.handlePendingQuestion}
          >
          <div className='ui huge icon input'>
            <input type='text' size="10"/>
            <i aria-hidden='true'/>
          </div>
          <span> </span><input className="ui olive button big" type="submit"/><br/>
          <div className='ui large pointing label'>What's your answer?</div>
        </form>
      </div>
    )
  }
}

export default Input
