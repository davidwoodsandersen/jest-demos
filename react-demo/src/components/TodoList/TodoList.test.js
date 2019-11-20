import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const instance = renderer.create(<TodoList todos={['a', 'b', 'c']} />).toJSON();
  expect(instance).toMatchSnapshot();
});
