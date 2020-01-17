import React from "react";
import './Die.css';

class Die extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastResult: ""
    };

    this.handleRollButton = this.handleRollButton.bind(this);
  }

  handleRollButton() {
    const max = this.props.sides;
    const value = Math.floor((Math.random() * max) + 1);

    this.setState({
        lastResult: value
    });
  }

  render() {
    return (
      <div className="die-container">
        <header>Dice Game</header>
        <div className="sides">D{this.props.sides}</div>
        <button className="roll-button"onClick={this.handleRollButton}>Roll It!</button>
        <div>
          Last Roll:
          <span>{this.state.lastResult}</span>
        </div>
      </div>
    );
  }
}

export default Die;
