import React from 'react';
import './Todo.scss';

function Todo(props) {
  const text = props.text || '';
  return (
    <div className="Todo">
      {text}
    </div>
  );
}

export default Todo;
