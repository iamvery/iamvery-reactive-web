import React, { Component } from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Posts from './Posts';

it('displays posts', () => {
  const rendered = shallow(<Posts data={['First!', 'Another!']}/>);

  expect(rendered.text()).toContain('First!');
  expect(rendered.text()).toContain('Another!');
});

it('does not change unexpectedly', () => {
  const posts = renderer.create(<Posts data={['one', 'two']} />);
  let tree = posts.toJSON();
  expect(tree).toMatchSnapshot();
});
