import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MmrChart from "./components/MmrChart";

class App extends Component {
  // default State object
  state = { player: "76561197978098862" };

  async componentDidMount() {
    const res = await axios.get(
      `https://warm-taiga-16419.herokuapp.com/db-stats/${this.state.player}`
    );

    this.setState({ stats: res.data.results });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MmrChart dataPoints={this.state.stats} />
        </header>
      </div>
    );
  }
}

export default App;
