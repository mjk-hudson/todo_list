import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput]= useState("");
  const [listInputs, setListInputs]= useState({});

  /*Add the heading by checking whether or not the input is empty if empty create a new todos object with a headind and an empty list array the reset the heading input to empty string*/
  const handleAddTodo = () => {
    if (headingInput.trim() !=='')
      {
      setTodos([...todos, {heading: headingInput, list: []}]);
      setHeadingInput('');
    }
  };
  //Function to add a new list item to a specific todo heading
  const handleAddList = (index) => {
    //Check to make sure the input is not empty or whitespace
    if(listInputs[index] && listInputs[index].trim() !=='') 
      {
        const newTodos = [...todos];//Creates a copy of the current todos array
        newTodos[index].list.push(listInputs[index]);//Add the list item to the corresponding headings list
        setTodos(newTodos);//Update the todos state with the new list item
        setListInputs({...listInputs, [index]:''});//Reset the list input field to an empty string
      }
    };
    //Function to update list input value for a specific heading index
    const handleListInputChange = (index,value) =>
    {
      //Update the listInputs state for the corresponding index with the new value
      setListInputs({...listInputs,[index]: value});
    };
    //Function to delete an entire list
    const handleDeleteTodo = (index) => {
      //Create a shallow copy of the current todos array
      const newTodos = [...todos];
      //Remove the todo at the specificied index
      newTodos.splice(index, 1);
      //Update the todos state with the modified array
      setTodos(newTodos);
    };
    //Function to delete a specific list item from a heading
    const handleDeleteListItem = (todoIndex, listIndex) => {
      const newTodos = [...todos];//Create a shallow copy of the current todos array
      newTodos[todoIndex].list.splice(listIndex, 1);//Remove the list item at the specified index from the corresponding heading's list
      setTodos(newTodos);//Update the todos state with the modified array
    };
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          {/*Input field to enter new heading*/}
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value= {headingInput}
            onChange={(e)=> setHeadingInput(e.target.value)}/>
          {/*Button to add new heading*/}
          <button className="add-list-button"
          onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      {/*Main section showing all tools*/}
      <div className='todo_main'>
        {todos.map((todo,index) => (
          <div key={index} className='todo-card'>
            <div className='heading_todo'>
              {/*Display the heading of the todo item*/}
              <h3>{todo.heading}</h3>
              {/*Button to delete the current heading by passing its index*/}
              <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
            </div>
            <ul>
              {/*Iterate over each list item in the current todo*/}
              {todo.list.map((list, listIndex) => 
              (
                <li key={listIndex} className='todo_inside_list'>
                  <p>{list}</p>
                </li>
              )
            )
              }
            </ul>
            <div className='add_list'>
              {/*Input field for the new list item*/}
              <input 
              type='text'
              className='list-input'
              placeholder='Add List'
              value={listInputs[index] || ''}
              onChange={(e) => handleListInputChange(index, e.target.value)}/>
              {/*This is a button that adds the list item to the corresponding heading when clicked*/}
              <button className ="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
              {/*This button deletes the list item in the corresponding headhing array*/}
              <button className = "delete-button-heading" onClick ={() => handleDeleteListItem(index)}>Delete List Item</button>
              </div>
          </div>
        ))}
       </div>
    </>
    )
}
  export default TodoList;
