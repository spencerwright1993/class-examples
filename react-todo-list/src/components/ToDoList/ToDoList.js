import React from "react";
import ToDo from "../ToDo/ToDo";
import { thisTypeAnnotation } from "@babel/types";

class ToDoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boxInput: ''
    };

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleBoxInputChange = this.handleBoxInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }


  createToDoListElements() {
    return this.props.list.map((item, index) => {
      const todo= {
        item,
        index
      };
      return <ToDo item={todo} key={index} handleDeleteItem={ this.handleDeleteItem }/>
    });
  }

  handleDeleteItem(index) {
    this.props.handleDeleteItem(index);
  }

    handleBoxInputChange(event) {
      const newValue = event.target.value;

      this.setState({
        boxInput: newValue
      });
    };
    handleAdd(){
      console.log('Add Item')
    }
    handleKeyPress(event){
    if(event.key === 'Enter'){
      this.handleAdd();
    }
  }
  handleAdd(){
    const todo = this.state.boxInput;
    if(todo !== ''){
    this.props.onAddItem(todo);
    }
    else {
      alert('Bruh You Need To Add Something');
    }
    this.setState({
      boxInput: ''
    });
    this.nameInput.focus();
  }
  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
    return (
      <div className="to-do-list-container">
        <h1>{this.props.name} </h1>
        <div>Add Item</div>
        <input type="text" 
        value={ this.state.boxInput } 
        onChange={ this.handleBoxInputChange }
        onKeyPress= { this.handleKeyPress }
        ref={(input) => { this.nameInput = input; }}/>
        <button onClick={ this.handleAdd }>ADD</button>
        <div className="list">
          {this.createToDoListElements()}
        </div>
      </div>
    );
  }
}

export default ToDoList;
