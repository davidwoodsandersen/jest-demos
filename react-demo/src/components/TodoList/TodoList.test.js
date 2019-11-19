import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
