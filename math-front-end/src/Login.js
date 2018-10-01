import React, {Component} from 'react'
import './Login.css'
export default class Login extends Component{

  render(){

    return(

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
              <div className="ui basic green button" onClick={(event)=>{this.props.loginButton(event)}}>Login</div>
              <div className="ui basic red button" onClick={(event)=>{this.props.createAccountButton(event)}}>Create New Account</div>
            </div>
          </form>
        </div>
      </div>
    </div>

    )
  }
}
