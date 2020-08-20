import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div>
        Register
      </div>
    );
  }
}
export default connect(state => {
  return {
    isLogged: state.isUserLoggedIn,
    userName: state.username
  }
})(RegisterPage);