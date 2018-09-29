import React, {Component} from 'react'

class Piggybank extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className="Piggybank">
        {/* todo: render out diff pictures (at least 3 by how much money there is) */}
        {this.props.piggyTotal > 0 ?
          <img className="money-pig" src="https://banner2.kisspng.com/20180413/gaq/kisspng-piggy-bank-money-saving-pig-5ad11f05a5ec97.5265925915236544056796.jpg" height="300" width="300"/>
          :
        <div id="face-wrap">
          <div id="face" className=" body">
            <div id="ear-r" className="ear body"></div>
            <div id="ear-l" className="ear body"></div>
            <div id="eye-r" className="eye body"></div>
            <div id="eye-l" className="eye body"></div>
            <div id="nose">
              <div id="nose-r" className="nose body"></div>
              <div id="nose-l" className="nose body"></div>
            </div>
          </div>
        </div>}
        <p>${this.props.piggyTotal}</p>
      </div>
    )
  }

}

export default Piggybank
