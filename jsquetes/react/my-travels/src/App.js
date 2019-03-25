import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels
          destination="Toulouse"
          country="France"
          distance="In my heart"
          image="https://image.noelshack.com/fichiers/2019/13/1/1553506957-toulouse.jpeg"
        />
        <Travels
          destination="Stockholm"
          country="Sweden"
          distance="Scandinavia"
          image="https://image.noelshack.com/fichiers/2019/13/1/1553506957-stockholm.jpeg"
        />
      </div>
    );
  }
}

export default App;
