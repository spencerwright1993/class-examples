import React from "react";
import "./App.css";
import Die from './Components/Die'
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diceBag: [8, 16, 20],
      inputValue: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(event) {
    const sides = event.target.value;

    this.setState({
      inputValue: sides
    });
  }

  handleAdd() {
    const sides = this.state.inputValue;

    const newDiceBag = [...this.state.diceBag];

    newDiceBag.push(sides);

    this.setState({
      diceBag: newDiceBag,
      inputValue: ""
    });
  }

  renderDiceList() {
    return (
      this.state.diceBag.map((sides, index) => {
        return ( <Die sides={ sides } key={ index }/> );
      })
    );
  }
 
  render() {
    return (
      <div className="App">
        <header>Let's Play Some Craps</header>
        { this.renderDiceList() } 
        <Button onClick={this.handleAdd} variant="contained" color="secondary">
          Add New Die
        </Button>
        <input
          type="number"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
export default App;
