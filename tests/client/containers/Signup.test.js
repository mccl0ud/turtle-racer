import React from 'react';
import { shallow } from '../../enzyme';

import { Signup } from '../../../src/client/containers/Signup';

describe('<Signup/>', () => {
  const mockFn = jest.fn(Boolean);

  test('contains a signup form', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('#signup-form')).toHaveLength(1);
  });
  
  test('contains an h1 header with signup as text', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.contains(<h1>Signup</h1>)).toBeTruthy();
  });

  test('contains four input fields', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find('input')).toHaveLength(4);
  });

  test('back to signup button should call a function', () => {
    const wrapper = shallow(<Signup setLoginSignupToggle={mockFn} />);
    wrapper.find('.button').simulate('click', { preventDefault() {}});
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});