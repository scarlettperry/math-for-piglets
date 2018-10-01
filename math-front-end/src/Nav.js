import React, {Component} from 'react'
// import { Dropdown, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super()
  }
  render(){
    return (
      <div className="Nav">
        <div className='ui vertical menu'>
          <NavLink className="item" to="/" exact>Home</NavLink>
          <NavLink className="item" to="/incorrect-questions">Incorrect Questions</NavLink>
        </div>
      </div>
    )
  }
}

export default Nav
