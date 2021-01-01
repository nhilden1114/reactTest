
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import FactList from "./components/FactList";


class App extends Component {

  // default State object
  state = {
    facts: []
  };

  componentDidMount() {
    axios
      .get("https://cat-fact.herokuapp.com/facts")
      .then(response => {

        // create an array of contacts only with relevant data
        const newFacts = response.data.map(c => {
          return {
            id: c._id,
            text: c.text
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          facts: newFacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Manager</h1>
        </header>

        <FactList facts={this.state.facts} />
      </div>
    );
  }
}

export default App;