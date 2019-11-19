import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';

function App(props) {
  const [todos, setTodos] = useState([]);
  const addTodo = (input) => {
    todos.push(input.value);
    setTodos(todos.slice(0));
  };
  
  return (
    <div className="App">
      <h1>React Demo</h1>
      <TodoList todos={todos} />
      <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
