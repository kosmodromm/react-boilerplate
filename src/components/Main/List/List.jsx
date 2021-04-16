import React from "react";
import "../../../App.css";

const List = (props) => {
//     let spanText = (e) => {
//         props.toDoList.length ? 
//         <span className={ e.checked ? "checked" : ''} onClick={() => props.toggleChecked(e.id)}>{e.text}</span> :
//         '';
//     };
    
        // const eListCheck = (e) => {
        //     (e == undefined) ? "" : "checked";
        // }

        // const eTextCheck = (e) => {
        //     (e == undefined) ? "" : e.text;
        // }

      return (    
          <div className="to-do-list-list">
              <ul className="list"> { 
                props.toDoList.map( e => 
                <li ><span className={ e.checked ? "checked" : ''} onClick={() => props.toggleChecked(e.id)}>{e.text}</span>
                    <span className="close" onClick={() => props.deleteItem(e.id)}>&#10006;</span>
                </li>)}
              </ul>
          </div>
      )
  }
  
  export default List;