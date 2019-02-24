import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class PlayerIdInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { playerId: props.playerId };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ playerId: event.target.value });
  }

  handleSubmit(event) {
    this.props.onUpdate(this.state.playerId);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="steamid" className="mr-sm-2">
            SteamID64
          </Label>
          <Input
            type="text"
            id="steamid"
            placeholder={this.props.playerId}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Get Stats</Button>
      </Form>
    );
  }
}

export default PlayerIdInputForm;
