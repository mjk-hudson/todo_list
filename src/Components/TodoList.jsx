import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos,setTodos] = useState([]);
  const [headingInput,setheadingInput]= useState("");
  const [listInput,setlistInput]= useState({});

  /*Add the heading by checking whether or not the input is empty
  if empty create a new todos object with a headind and an empty list array
  the reset the heading input to empty string*/
  const handleAddTodo = () => {
    if(headingInput.trim() !==''){
      setTodos([...todos, {heading: headingInput, list: []}]);
      setheadingInput('');
    }
  }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          {/*Input field to enter new heading*/}
          <input
            type="text"
            className="heading-input"//CSS Class for styling
            placeholder="Enter heading"//Text shown when input is empty
            value= {headingInput}
            //Add onChange event to update the headingInput state
            onChange={(e)=> {setheadingInput(e.target.value);}}
          />
          {/*Button to add new heading*/}
          <button className="add-list-button"
          onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
