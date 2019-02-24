import React, { Component } from "react";
import { Media } from "reactstrap";

class PlayerInfo extends Component {
  render() {
    let { user } = this.props;
    if (!user) {
      return null;
    }
    console.log(user);

    return (
      <div>
        <Media className="playerInfoDiv">
          <Media>
            <Media object src={user.url} alt="Player avatar" />
          </Media>
          <Media body>
            <Media className="username">{user.tag}</Media>
            <Media className="matches">Mathes: {user.matches}</Media>
          </Media>
        </Media>
      </div>
    );
  }
}

export default PlayerInfo;
