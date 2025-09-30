import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos,setTodos] = useState([]);
  const [headingInput,setheadingInput]= useState("");
  const [listInput,setlistInput]= useState({});  

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button">Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
