import React, { Component } from 'react';
import 'whatwg-fetch'
import logo from './logo.svg';
import background from './images/artistic.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header" style={{backgroundImage: "url(" + background + ")"}}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome Atomic User</h1>
          </header>

        </div>
      </div>
    );
  }
}

export default App;
