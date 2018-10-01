import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class IncorrectCard extends Component {
  // constructor() {
  //   super()
  // }

  render(){
    // console.log(this.props);

    return (
      <div className="IncorrectCard">
        <p className="incorrectQuestion">{this.props.question.equation}</p>
        <Link to="/" exact>
          <button onClick={()=>this.props.handleClick(this.props.question)}>Try Again</button>
        </Link>
      </div>


    )
  }

}

export default IncorrectCard
