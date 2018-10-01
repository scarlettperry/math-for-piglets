import React, { Component, Fragment } from 'react';
import './App.css';
import HeaderComp from './HeaderComp'
import Main from './Main'
import Login from './Login'

class App extends Component {

  state ={
    loggedIn: false
  }

  handleLogin = () =>{
    this.setState({loggedIn: true})
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ?
        <Fragment>
        <HeaderComp />
        <Main />
        </Fragment>
          :
           <Login handleLogin={this.handleLogin}/>}
      </div>
    );
  }
}

export default App;
