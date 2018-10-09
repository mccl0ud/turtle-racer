import React from 'react';
import { shallow } from '../../enzyme';

import { setIsLoggedIn, setLoginSignupToggle } from '../../../src/client/actions/actions';
import * as types from '../../../src/client/constants/actionTypes';

describe('actions', () => {
  describe('setIsLoggedIn', () => {
    test('should return an object with the correct type', () => {
      const expected = setIsLoggedIn(true);
      expect(expected.type).toStrictEqual(types.SET_IS_LOGGED_IN);
      expect(expected.payload).toBeTruthy();
    });
  });

  describe('setLoginSignupToggle', () => {
    test('should return an object with the correct type', () => {
      const expected = setLoginSignupToggle(true);
      expect(expected.type).toStrictEqual(types.SET_LOGIN_SIGNUP_TOGGLE);
      expect(expected.payload).toBeTruthy();
    })
  });
});