import { combineReducers } from 'redux';
import UserReducers from '../app/components/users/reducer';
import RegisterReducers from '../app/components/register/reducer';

const defaultReducers = combineReducers({
  user: UserReducers,
  register: RegisterReducers,
});

export default defaultReducers;