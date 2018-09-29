import React, {Component} from 'react'

class IncorrectCard extends Component {
  constructor() {
    super()
  }

  render(){
    console.log(this.props);
    return (
      <div>
        Hi I'm the Incorrect Card
      </div>
    )
  }

}

export default IncorrectCard
