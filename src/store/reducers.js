import { combineReducers } from 'redux';
import UserReducers from '../app/users/reducer';

const defaultReducers = combineReducers({
  user: UserReducers,
});

export default defaultReducers;