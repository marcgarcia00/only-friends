import RegisterConstants from './constants';

export const setRegisterUser = (name, value) => {
  return {
    type: RegisterConstants.SET_REGISTER_USER,
    name: name,
    value: value
  }
}

export const setErrors = (name, value) => {
  return {
    type: RegisterConstants.SET_ERRORS,
    name: name,
    value: value,
  }
}