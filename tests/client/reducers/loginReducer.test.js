import * as types from '../../../src/client/constants/actionTypes';
import loginReducer from '../../../src/client/reducers/loginReducer';

// define a vanilla state to compare against
const initialState = {
  isLoggedIn: false,
  loginSignupToggle: true
};

/**
 * This function refreshes the state when it is called
 */
const resetState = () => {
  initialState = {
    isLoggedIn: false,
    loginSignupToggle: true
  }
};

// define an action object with type and payload
describe('loginReducer.js', () => {
  afterAll(() => {
    resetState();
  });

  test('the state should not change when a type is not defined', () => {
    const expectedState = loginReducer(initialState, {});
    expect(expectedState.isLoggedIn).toStrictEqual(initialState.isLoggedIn);
    expect(expectedState.loginSignupToggle).toStrictEqual(initialState.loginSignupToggle);
  });

  test('should properly update isLoggedIn in the state', () => {
    const expected = loginReducer(initialState, { type: types.SET_IS_LOGGED_IN, payload: true });
    expect(expected.isLoggedIn).toBeTruthy();
  });

  test('should properly update loginSignupToggle in the state', () => {
    const expected = loginReducer(initialState, { type: types.SET_LOGIN_SIGNUP_TOGGLE, payload: false });
    expect(expected.loginSignupToggle).toBeFalsy();
  });
});