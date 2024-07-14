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

  // handleAddList() Function To Add Todo Items
  const handleAddList = (index) => {
    if (listInput.trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInput);
      setTodos(newTodos);
      setListInput("");
    }
  };

  //when i delete the list create a function with name handleDeleteTodo
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
              <button className="delete-button-heading" onClick={handleDeleteTodo}>Delete Heading</button> {/* onClick event in the button with class name delete-button-heading */}
            </div>

            <ul>
              {todo.lists.map((list, listIndex) => (
                <li key={listIndex} className="todo_inside_list">
                  <p>{list}</p>
                </li>
              ))}
            </ul>

            <div className="add_list">
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInput}
                onChange={(e) => setListInput(e.target.value)}
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Add List
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default TodoList;
