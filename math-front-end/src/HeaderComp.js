import React, {Component} from 'react'
import { Header } from 'semantic-ui-react'

class HeaderComp extends Component {

  render(){
    return(
      <div className="HeaderComp">
         <Header as='h2' icon='pencil' content='DO MATH WITH SCARLETT' />
         <br/>
         <br/>
      </div>
    )
  }
}

export default HeaderComp
