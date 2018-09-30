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

// IncorrectCard.defaultProps = {
//   equation: "Great job! You have no inccorect questions!"
// }

export default IncorrectCard
