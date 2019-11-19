import React from 'react';
import './TodoList.scss';
import Todo from '../Todo/Todo';

function TodoList(props) {
  const todos = props.todos ? props.todos.map(todo => {
    return (
      <Todo text={todo} key={Math.random() * 1000} />
    );
  }) : '';

  return (
    <div className="TodoList">
      <h3>Todo List</h3>
      {todos}
    </div>
  );
}

export default TodoList;
