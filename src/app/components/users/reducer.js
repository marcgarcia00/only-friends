import UserConstants from './constants';

const initState = {
  isLoggedIn: false,
  email: '',
  password: '',
}


const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case UserConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }

    default:
      return {
        ...initState
      }
  }
}
export default UserReducer;

