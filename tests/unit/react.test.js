import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from '../enzyme';

import App from '../../src/client/App';

describe('App.jsx', () => {
  test('contains Hello World', () => {
    const wrapper = shallow(<App />);

    // Check if the text inside of App is 'Hello World'
    expect(wrapper.contains('Hello World')).toBeTruthy();
  });

  test('renders a header', () => {
    const wrapper = shallow(<App />);

    // Check if the header has been shallow rendered
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});