import React from "react";
import "../../App.css";
import Input from "./Input/Input.jsx";
import List from "./List/List.jsx";

class Main extends React.Component {
    render() {
      return (
        <div className='main'>
          <div className="toDoList">
            <Input inputText={this.props.state.inputText} addListItem={this.props.addListItem} typing={this.props.typing}/>
            <List toDoList={this.props.state.toDoList} toggleChecked={this.props.toggleChecked} deleteItem={this.props.deleteItem}/>
          </div>
        </div>
      )
  }
  }
  
  export default Main;