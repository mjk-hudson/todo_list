import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos,setTodos] = useState([]);
  const [headingInput,setheadingInput]= useState("");
  const [listInput,setlistInput]= useState({});

  /*Add the heading by checking whether or not the input is empty if empty create a new todos object with a headind and an empty list array the reset the heading input to empty string*/
  const handleAddTodo = () => {
    if (headingInput.trim() !=='')
      {
      setTodos([...todos, {heading: headingInput, list: []}]);
      setheadingInput('');
    }
  };
  //Function to add a new list item to a specific todo heading
  const handleAddList = (index) => {
    //Check to make sure the input is not empty or whitespace
    if(listInputs[index] && listInputs[index].trim() !=='') 
      {
        const newTodos = [...todos];//Creates a copy of the current todos array
        newTodos[index].lists.push(listInputs[index]);//Add the list item to the corresponding headings list
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
      const newTodos = [...todo];
      //Remove the todo at the specificied index
      newTodos.splice(index, 1);
      //Update the todos state with the modified array
      setTodos(newTodos);
    };
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
      <div className='todo_main'>
        {todos.map((todo,index) => (
          //iterate through each todos item in the array 
          <div key={index} className='todo-card'>
            <div className='heading_todo'>
              {/*Display the heading of the todo item*/}
              <h3>{todo.heading}</h3>
              {/*Button to delete the current heading by passing its index*/}
              <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
            </div>
            //Render all list items under this heading */
            <ul>
              {/*Iterate over each list item in the current todo*/}
              {todo.list.map((list, listIndex) => 
              (
                <li key={listIndex} className='todo_inside_list'>
                  //Display the list item text
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
              value={listInputs[index] || ''}//use the value from the listInputs array based on the current index 
              onChange={(e) => handleListInputChange(index, e.target.value)}/>
              {/*This is a buttong that adds the list item to the correspondingheading when clicked*/}
              <button className ="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
              <button className = "delete-button-heading" onClick ={handleDeleteTodo}>Delete Headign</button>
              </div>
          </div>
        ))}
       </div>
    </>
    )
}
  export default TodoList;
