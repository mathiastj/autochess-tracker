import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
import MmrChart from "./components/MmrChart";
import PlayerIdInputForm from "./components/PlayerIdInputForm";
import PlayerInfo from "./components/PlayerInfo";
import ServerResponse from "./server-response";

// const endpoint = "https://warm-taiga-16419.herokuapp.com/db-stats";
const initialPlayerId = "76561197978098862";

class App extends Component {
  state = {};

  async getStats(playerId) {
    // Hardcode response since backend was hosted on Heroku which is shutting down their free tier
    // const res = await axios.get(`${endpoint}/${playerId}`);
    const res = ServerResponse;
    this.setState({ stats: res.data.results, user: res.data.user });
  }

  async componentDidMount() {
    await this.getStats(initialPlayerId);
  }

  async handlePlayerUpdate(playerId) {
    await this.getStats(playerId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PlayerIdInputForm
            playerId={initialPlayerId}
            onUpdate={playerId => this.handlePlayerUpdate(playerId)}
          />
          <PlayerInfo user={this.state.user} />
          <MmrChart dataPoints={this.state.stats} />
        </header>
      </div>
    );
  }
}

export default App;
