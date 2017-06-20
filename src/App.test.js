import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('loads', () => {
  const app = render(<App />);

  expect(app.text()).toContain('Loading');
});

it.skip('does not change unexpectedly', () => {
  const app = renderer.create(<App />);
  let tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
