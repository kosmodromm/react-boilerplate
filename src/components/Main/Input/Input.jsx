import React from "react";
import "../../../App.css";

class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.newListItem = React.createRef();
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onPostChange () {
        let text = this.newListItem.current.value;
        this.props.typing(text);
    };
    
    onKeyDown (e) {
        if (e.keyCode == 13) {
            this.props.addListItem();
        }
    }

    render() {
        return (
            <div className="to-do-list-add">
                <input
                    type="text" 
                    className="input" 
                    placeholder="some text..." 
                    ref={this.newListItem} 
                    onChange={() => this.onPostChange()}
                    value={this.props.inputText}
                    onKeyDown={this.onKeyDown}/>
                    
                <button 
                    className="addBtn" 
                    onClick={this.props.addListItem} >
                +</button>
            </div>
        );
    }
}
  
  export default Input;