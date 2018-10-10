import * as types from '../constants/actionTypes';
import axios from 'axios';

const initialState = {
  // store prompt in state to pass down as a prop
  prompt: '',
  userInput: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    // add the prompt retrieved from the database to the state
    case types.ADD_PROMPT:
      return { prompt: action.payload };
    // send input to the server and reset the input field
    case types.SEND_AND_UPDATE_INPUT_TO_SERVER:
      axios.post('/validate', {
        input: action.payload
      })
      .then((res) => {
        // if validated on server, update userInput in the state
        if (res.data) return { userInput: '' }
      })
      .catch((err) => {
        console.log(err);
      });
    case types.GET_USER_INPUT:
      axios.get('/input')
        .then((res) => {
          // update state with current user input
          if (res.data) return { userInput: res.data }
        })
        .catch((err) => {
          console.log(err);
        });
    default:
      return state;
  }
};

export default gameReducer;
