import UserConstants from './constants';

export const loginSuccess = () => {
  return {
    type: UserConstants.LOGIN_SUCCESS
  };
}