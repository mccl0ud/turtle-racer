import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from '../enzyme';

import { App } from '../../src/client/App';
import Login from '../../src/client/containers/Login';
import Signup from '../../src/client/containers/Signup';

describe('<App />', () => {
  test('contains a div with an id of app-container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#app-container')).toHaveLength(1);
  });

  test('contains an h1 header with Ultimate Turtle Racer as text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>Ultimate Turtle Racer</h1>)).toBeTruthy();
  });

  test('contains login component when prop loginSignupToggle is true', () => {
    const wrapper = shallow(<App loginSignupToggle={true}/>);
    expect(wrapper.contains(<Login />)).toBeTruthy();
  });

  test('contains signup component when prop loginSignupToggle is false', () => {
    const wrapper = shallow(<App loginSignupToggle={false}/>);
    expect(wrapper.contains(<Signup />)).toBeTruthy();
  });
});
