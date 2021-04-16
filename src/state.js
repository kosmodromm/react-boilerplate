
let rerenderEntireTree;

let state = {
    inputText: '',
    toDoList: [
        {id: 1, text: 'Buy Bitcoin', checked: true},
        {id: 2, text: 'Buy Ether', checked: false},
        {id: 3, text: 'Sell Ripple', checked: true}
    ],
}

export let addListItem = () => {
    let newListItem;
    newListItem = state.toDoList.length ? 
    { id: state.toDoList[state.toDoList.length - 1].id + 1, text: state.inputText, checked: false } : 
    { id: 1, text: state.inputText, checked: false };
    state.toDoList.push(newListItem);
    state.inputText = "";
    rerenderEntireTree(state);
  };
  
export let typing = (text) => {
    state.inputText = text;
    rerenderEntireTree(state);
  };

export let toggleChecked = (index) => {state.toDoList.forEach((list) => {
  if (list.id === index) {
    list.checked = !list.checked;
    rerenderEntireTree(state);
  }
})}

export let deleteItem = (index) => {
  state.toDoList.splice( 
    state.toDoList.findIndex(elem => elem.id === index
    ) , 1 )
    rerenderEntireTree(state);
  }

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;