import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const instance = renderer.create(<Button />).toJSON();
  expect(instance).toMatchSnapshot();
});
