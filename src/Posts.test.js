import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Posts from './Posts';

it('displays posts', () => {
  const rendered = shallow(<Posts data={['First!', 'Another!']}/>);

  expect(rendered.text()).toContain('First!');
  expect(rendered.text()).toContain('Another!');
});
