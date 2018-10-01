import React, {Component} from 'react'
import { Label } from 'semantic-ui-react'
import piggycoins from './images/piggy_coins.jpg'
import piggydollars from './images/pig_dollars_coins.jpg'
import porco from './images/porco.png'
import hog from './images/master-hog.png'

class Piggybank extends Component {

  piggyImg = () => {
    if (this.props.piggyTotal <= 2) {
      return (
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
        </div>
      )
    }
    else if (this.props.piggyTotal >= 3 && this.props.piggyTotal < 5) {
      return (
        <div className="img-wrapper">
        <img src={piggycoins} height="200" width="250"/>
        </div>
      )
    }
    else if (this.props.piggyTotal >= 5 && this.props.piggyTotal < 8) {
      return (
        <div className="img-wrapper">
        <img src={piggydollars} height="175" width="200"/>
        </div>
      )
    }
    else if (this.props.piggyTotal >= 8 && this.props.piggyTotal < 12) {
      return (
        <img className="TwirlyPig" src={porco}/>
      )
    }
    else if (this.props.piggyTotal >= 12) {
      return (
        <div className="masters-domicile">
          <img className="master-blaster" src={hog}/>
        </div>
      )
    }
  }

  render(){
    return(
      <div className="Piggybank">
        <br/>
        {this.piggyImg()}
        <br/>
        <Label as='a' size="huge" color='green' tag>
            ${this.props.piggyTotal}
          </Label>
      </div>
    )
  }

}

export default Piggybank
