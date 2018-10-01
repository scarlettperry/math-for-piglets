import React, {Component} from 'react'

class Piggybank extends Component {

  render(){
    return(
      <div className="Piggybank">
        Hello I'm a pig.
        <p>${this.props.piggyTotal}</p>
      </div>
    )
  }

}

export default Piggybank
