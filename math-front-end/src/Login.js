import React, {Component} from 'react'
import './Login.css'
export default class Login extends Component{


  render(){

    return(

    <div className="center">
      <div className="center ui card ">
        <div className="content">
          <h3 className ="header">Please Login</h3>
          <form onSubmit={this.props.handleLogin}>
          <label>User name: </label>
            <input type="text"  /><br/>
            <br/>

          <label> Password: </label>
            <input type="text" /> <br/>
            <br/>
            <input type="submit"/>
            <div className="ui two buttons">
              <div className="ui basic green button">Login</div>
              <div className="ui basic red button">Create New Account</div>
            </div>
          </form>
        </div>
      </div>
    </div>

    )
  }
}
