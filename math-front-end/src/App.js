import React, { Component } from 'react';
import './App.css';
import HeaderComp from './HeaderComp'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComp />
        <Main />
      </div>
    );
  }
}

export default App;
