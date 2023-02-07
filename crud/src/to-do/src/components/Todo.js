import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodos } from "../actions/action";

function Todo() {
  const [todoInput, settodoInput] = useState("");

  let dispatch = useDispatch();

  let todosFromStore = useSelector((state) => state.todo.list);
  // console.log("todosFromStore",todosFromStore);
  let updateTodoInput = (e) => {
    settodoInput(e.target.value);
  };
  return (
    <div>
      <h1>Redux TODO APP</h1>
      <input
        name="todo"
        placeholder="Enter Todo"
        value={todoInput}
        onChange={(e) => {
          updateTodoInput(e);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(todoInput), settodoInput(""));
        }}
      >
        ➕
      </button>

      <div>
        <h2>Todo From Store</h2>
        {todosFromStore.map((val, idx) => {
          return (
            <div key={idx}>
              <li>{val}</li>
              <button
                onClick={() => {
                  dispatch();
                }}
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => {
                  dispatch(deleteTodo(idx));
                }}
              >
                🗑️ Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(removeAllTodos());
          }}
        >
          Remove All 🗑️
        </button>
      </div>
    </div>
  );
}

export default Todo;
