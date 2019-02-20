import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MmrChart from "./components/MmrChart";

class App extends Component {
  // default State object
  state = {};

  async componentDidMount() {
    const res = await axios.get("/stats");

    this.setState({ stats: res.data });
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
