import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  render(){
    return (
      <div className="Nav">
        <div className='ui vertical menu'>
          <NavLink className="item" to="/incorrect-questions/">Incorrect Questions</NavLink>
          <NavLink className="item" to="/" exact>Home</NavLink>
        </div>
      </div>
    )
  }
}

export default Nav
