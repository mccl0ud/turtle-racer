import React from 'react';
import { shallow } from '../../enzyme';

import { Login } from '../../../src/client/containers/Login';

describe('<Login/>', () => {
  const mockFn = jest.fn(Boolean);

  test('contains a login form', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('#login-form')).toHaveLength(1);
  });
  
  test('contains an h1 header with Login as text', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.contains(<h1>Login</h1>)).toBeTruthy();
  });

  test('contains four input fields', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(4);
  });

  test('signup button should call a function', () => {
    const wrapper = shallow(<Login setLoginSignupToggle={mockFn} />);
    wrapper.find('.button').simulate('click', { preventDefault() {}});
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});