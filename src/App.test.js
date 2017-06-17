import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('greets the world with a hello', () => {
  const app = shallow(<App />);
  expect(app.text()).toEqual('Hello, World!');
});

it('does not change unexpectedly', () => {
  const app = renderer.create(<App />);
  let tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
