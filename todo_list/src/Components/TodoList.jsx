import { useState } from "react";
import "./TodoList.css";
const TodoList = () => {
  // represent an array of todo items
  const [todos, setTodos] = useState([]);

  // Represent the value will enter by user into an input field for adding a new heading for a todo item
  const [headingInput, setHeadingInput] = useState("");

  // Create an empty string representing the value entered into an input field to add a new list item within a todo item.
  const [listInput, setListInput] = useState("");

  // Create a function called HandleAddTodo which will run when the Add Address button is clicked.
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

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
      <div className="todo_main"></div>
    </>
  );
};
export default TodoList;
