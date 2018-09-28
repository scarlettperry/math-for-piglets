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
         <Menu.Item>Create a Question</Menu.Item>
         <Menu.Item>Incorrect Questions</Menu.Item>
         <Menu.Item>Piggybank Collection</Menu.Item>
       </Menu>
      </div>
    )
  }
}

export default Nav
