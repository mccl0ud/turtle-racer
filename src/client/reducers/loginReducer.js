import * as types from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  loginSignupToggle: true
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_LOGGED_IN:
      return { isLoggedIn: action.payload };
    case types.SET_LOGIN_SIGNUP_TOGGLE:
      return { loginSignupToggle: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
