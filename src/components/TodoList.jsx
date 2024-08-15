import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("TodoList componentDidMount")
  }, []);

  const addTodo = (newTodo) => {
    console.log("TodoList addTodo")
  };

  const deleteTodo = (id) => {
    console.log("TodoList deleteTodo")
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;