import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main/Main.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main state={this.props.state} addListItem={this.props.addListItem} typing={this.props.typing} toggleChecked={this.props.toggleChecked} deleteItem={this.props.deleteItem}/>
      </div>
    );
  }
}

export default App;
