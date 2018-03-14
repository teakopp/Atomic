import React, { Component } from 'react';
import 'whatwg-fetch'
import logo from './logo.svg';
import background from './images/artistic.jpg'
import './App.css';

class CharacterSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players : ["people"]
    };

  }

componentWillMount() {
  fetch("http://localhost:3000/", {
       method: "GET",
       headers: { 'Content-Type': 'application/json' }
     }).then((response) => {
       return response.json();
     }).then((parsedData) => {
       this.setState({players: parsedData.results})
       console.log(parsedData);
     })
  }

  render() {
    return (

      <div>
      <p>{this.state.players}</p>
      </div>

    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <CharacterSheet />
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
