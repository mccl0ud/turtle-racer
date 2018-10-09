import * as types from '../constants/actionTypes';

export const setIsLoggedIn = bool => ({
  type: types.SET_IS_LOGGED_IN,
  payload: bool
});

export const setLoginSignupToggle = bool => ({
  type: types.SET_LOGIN_SIGNUP_TOGGLE,
  payload: bool
});
