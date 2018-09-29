import React, {Component} from 'react'

class IncorrectCard extends Component {
  // constructor() {
  //   super()
  // }

  render(){
    // console.log(this.props);

    return (
      <div>
        {this.props.question.equation}<br/>
        <button>Try Again</button><br/>
      </div>
    )
  }

}

export default IncorrectCard
