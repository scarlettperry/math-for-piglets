import React, { Component, Fragment } from 'react';
import './App.css';
import HeaderComp from './HeaderComp'
import Main from './Main'
import Login from './Login'

class App extends Component {

  state ={
    loggedIn: true,
    // users: [],
    // user_id: 0
  }

  componentDidMount(){
    fetch("https://math-for-piglets-backend.herokuapp.com/api/v1/users")
    .then(res => res.json())
    .then(data => this.setState({users: data.map(data => [data.id, data.name.toLowerCase()])}))
  }

  handleLoginButton = (event) =>{
    let nameInput = event.target.parentNode.parentNode[0].value

    this.state.users.forEach(user => {if(user.includes(nameInput)){
      return this.setState({loggedIn: true, user_id: user[0]})
    }})

    console.log(event.target.parentNode.parentNode[1].value, "password")
  }

  handleCreateAccount = (event) =>{
    let nameInput = event.target.parentNode.parentNode[0].value
    if(!this.state.loggedIn){
      fetch("http://localhost:3000/api/v1/users",{
        method: "POST",
        headers: {"Content-type": "application/json"
        },
        body: JSON.stringify({name: nameInput})
      }).then(res => res.json())
      .then(data => this.setState({loggedIn: true, user_id: data.id}))
    }
  }

  render() {
    // console.log(this.state, "app users");
    return (
      <div>
        {this.state.loggedIn ?
        <Fragment>
        <HeaderComp />
        <Main userID={this.state.user_id}/>
        </Fragment>
          :
           <Login loginButton={this.handleLoginButton} createAccountButton={this.handleCreateAccount}/>}
      </div>
    );
  }
}

export default App;
