import React, {Component} from 'react'
import './Login.css'
import { Header } from 'semantic-ui-react'

export default class Login extends Component{

  render(){

    return(
  <div className="login">
     <Header as='h2' icon='pencil' content='Math for Piglets' />
    <div className="center">
      <div className="center ui card ">
        <div className="content">
          <h3 className ="header">Please Login</h3>
          <form >
          <label>User name: </label>
            <input type="text"  /><br/>
            <br/>

          <label> Password: </label>
            <input type="text" /> <br/>
            <br/>
            <div className="ui two buttons">
              <div className="ui teal button" onClick={(event)=>{this.props.loginButton(event)}}>Login</div>
              <div className="ui teal basic button" onClick={(event)=>{this.props.createAccountButton(event)}}>Create New Account</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

    )
  }
}
