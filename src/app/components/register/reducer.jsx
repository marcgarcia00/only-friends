import RegisterConstants from './constants';

const initState = {
  registerUser: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
}

const RegisterReducer = (state = initState, action) => {
  switch (action.type) {

    case RegisterConstants.SET_REGISTER_USER:
      const resetErrors = initState.errors;
      return {
        ...state,
        registerUser: { ...state.registerUser, [action.name]: action.value},
        errors: { ...resetErrors }
      }

    case RegisterConstants.SET_ERRORS:
      console.log("reducer", action);
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: action.value
        }
      }

    default:
      return {
        ...initState,
      }
  }
}
export default RegisterReducer
