import React from "react";
import './ToDo.css';

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDone: false,
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

  }

  handleCheckboxChange(event) {
    const checked = event.target.checked;

    this.setState({
      isDone: checked
    });
  }

  render() {
    return (
      <div className="to-do-container">
        <input type="checkbox" onChange={ this.handleCheckboxChange } />
        <span className={ this.state.isDone ? 'done' : '' }>{ this.props.item.item }</span>
        <span className="delete" onClick={ () => this.props.handleDeleteItem(this.props.item.index) }>X</span>
      </div>
    );
  }
}

export default ToDo;
