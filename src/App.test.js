import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('loads and displays posts', async () => {
  const data = Promise.resolve(['First!', 'Another!']);
  const fakeFetch = () => data;

  const app = mount(<App fetchPosts={fakeFetch} />);

  expect(app.text()).toContain('Loading');

  await data;
  app.update();

  expect(app.text()).toContain('First!');
  expect(app.text()).toContain('Another!');
});

it('does not change unexpectedly', () => {
  const app = renderer.create(<App />);
  let tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
