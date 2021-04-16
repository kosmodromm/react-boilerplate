import state, { addListItem, toggleChecked, typing, deleteItem } from "./state.js"
import React from "react"
import { subscribe } from './state.js'
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App.js";

let rerenderEntireTree = () => {
    ReactDOM.render(<App state={state} addListItem={addListItem} typing={typing} toggleChecked={toggleChecked} deleteItem={deleteItem}/>, document.getElementById("root"));
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);