import React, { Component } from 'react';
import ListItem from './ListItem.js';
import './App.css';

class MyList extends Component {

  constructor(props) {
    super() 
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  newItemChange (e) {
    this.setState({
      newItem:e.target.value
    })
  }

  //ALTERNATE OPTION
  //addItem = (e) => {
  //   e.preventDefault()
       // //create a copy
  //   let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
        // //push item to copy
  //   toDoItemArrayCopy.push(this.state.currentItem)
      // //update state with copy
  //   this.state.toDoItemArray.push(this.state.currentItem)
  //   this.setState({
  //     toDoItemArray: toDoItemArrayCopy
  //   })
  // }

  deleteItem(e, index) {
    e.preventDefault()
    let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
    toDoItemArrayCopy = toDoItemArrayCopy.splice(index, 1)
    this.setState({
      toDoItemArray: toDoItemArrayCopy
    })
  }


  addItem(e) {
    e.preventDefault()
    this.state.toDoItemArray.push(this.state.newItem)
    this.setState({
       newItem: ''
    })
  }

  clearList(e) {
    console.log('clearing list!')
    this.setState({
      toDoItemArray:[]
    })
  }

  render() {

    let jsxToDos = this.state.toDoItemArray.map(function (item, index) {
      return (<ListItem 
              key={index}
              doThis={item}
              deleteItem={(e) => this.deleteItem(e, index)}
              />)
    })

    return (
     <div>
      <h1> Things I should stop fuckin around with: </h1>
      <ul>
        {jsxToDos}
      </ul>
      <button onClick={(e) => this.clearList(e) }> Clear! </button>
      <form>
        <input type="text"
         placeholder="Type an item here"
         onChange={(e) => this.newItemChange(e)}
         value={this.state.newItem}
        />
        <button onClick={(e) => this.addItem(e)}>Add it!</button>
      </form>
     </div>
    );
  }
}

export default MyList;
