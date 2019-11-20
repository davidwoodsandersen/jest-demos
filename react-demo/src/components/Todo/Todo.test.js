import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const instance = renderer.create(<Todo text={'a'} />).toJSON();
  expect(instance).toMatchSnapshot();
});
