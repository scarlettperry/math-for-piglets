import React, {Component} from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

class Nav extends Component {
  constructor() {
    super()
  }
  render(){
    return (
      <div className="Nav">
        <Menu vertical>
         <Menu.Item>Home</Menu.Item>
         <Menu.Item>Browse</Menu.Item>
         <Menu.Item>Help</Menu.Item>
       </Menu>
      </div>
    )
  }
}

export default Nav
