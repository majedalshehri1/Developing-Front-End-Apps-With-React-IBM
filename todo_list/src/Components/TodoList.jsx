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
            value={headingInput} //which binds the value of the 'input' field to the 'headingInput' state variable.
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }} // Add onChange event handler to update headingInput state
          />
          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3> {/* Display the heading here */}
              <button className="delete-button-heading">Delete Heading </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default TodoList;
