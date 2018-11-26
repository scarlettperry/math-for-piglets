import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class IncorrectCard extends Component {

  render(){
    // console.log(this.props);

    return (
      <div className="IncorrectCard">
        <span className="incorrectQuestion">{this.props.question.equation}</span><br/>
        <Link to="/" exact>
          <button className="ui teal button" onClick={()=>this.props.handleClick(this.props.question)}>Try Again</button>
        </Link>
      </div>


    )
  }

}

export default IncorrectCard
