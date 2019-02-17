import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div onClick={this.props.onClick}>This div cliked {this.props.times} times!</div>
            <Login 
            username="jdoe"
            password="pass"
            now={new Date().toISOString()} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
