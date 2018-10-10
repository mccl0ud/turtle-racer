import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import gameReducer from './gameReducer';

const reducers = combineReducers({
  login: loginReducer,
  game: gameReducer
});

export default reducers;
