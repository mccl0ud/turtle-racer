import * as types from '../constants/actionTypes';

const initialState = {
  // store prompt in state to pass down as a prop
  prompt: '',
  // text contained in the Input component
  userInput: '',
  // string of valid words typed by the user
  validWords: '',
  // string of valid input of the current word typed by the user
  validInput: '',
  // string of invalid input of the current word typed by the user
  invalidInput: '',
  // current character to be typed by the user
  currChar: '',
  // next character to be typed by the user
  nextChar: '',
  // remaining words in the passage
  remainingWords: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    // add the prompt retrieved from the database to the state
    case types.ADD_PROMPT:
      return { 
        prompt: action.payload,
        // initalize remainingWords with the prompt
        remainingWords: action.payload 
      };
    // send input to the server and reset the input field
    case types.SEND_AND_UPDATE_INPUT_TO_SERVER:
      // emit to socket and update state
    case types.GET_USER_INPUT:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_VALID_WORDS:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_VALID_INPUT:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_INVALID_INPUT:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_CURR_CHAR:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_NEXT_CHAR:
      // emit to socket and update state
    case types.SEND_AND_UPDATE_REMAINING_WORDS:
      // emit to socket and update state
    default:
      return state;
  }
};

export default gameReducer;
