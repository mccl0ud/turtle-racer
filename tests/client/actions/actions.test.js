import * as actions from '../../../src/client/actions/actions';
import * as types from '../../../src/client/constants/actionTypes';

describe('actions', () => {
  it('should create an action to set user login flag', () => {
    const bool = true;
    const expectedAction = {
      type: types.SET_IS_LOGGED_IN,
      payload: bool
    };
    expect(actions.setIsLoggedIn(bool)).toEqual(expectedAction);
  });

  it('should toggle login/signup flag', () => {
    const bool = true;
    const expectedAction = {
      type: types.SET_LOGIN_SIGNUP_TOGGLE,
      payload: bool
    };
    expect(actions.setLoginSignupToggle(bool)).toEqual(expectedAction);
  });
});
