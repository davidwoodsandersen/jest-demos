import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const instance = renderer.create(<Form />).toJSON();
  expect(instance).toMatchSnapshot();
});
