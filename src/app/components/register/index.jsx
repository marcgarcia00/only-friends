import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../header/index';
import InputFormContainer from '../util/input-form-container/index';
import * as actions from './actions';
import * as validateRegister from './validation/validation';
import ErrorConstants from './validation/errorMessages';
import './index.css';


class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.props.setRegisterUser(name, value);
  }

  validate() {
    let userToRegister = this.props.registerUser;
    let checkMismatch = true;
    let isReadyToSubmit = true;
    if (validateRegister.isEmpty(userToRegister.firstName)) {
      this.props.setErrors("firstName", ErrorConstants.REQUIRED);
      isReadyToSubmit = false;
    }

    if (validateRegister.isEmpty(userToRegister.lastName)) {
      this.props.setErrors("lastName", ErrorConstants.REQUIRED);
      isReadyToSubmit = false;
    }

    if (!validateRegister.isValidEmail(userToRegister.email)) {
      this.props.setErrors("email", ErrorConstants.INVALID_EMAIL);
      isReadyToSubmit = false;
    }

    if (validateRegister.isEmpty(userToRegister.password)) {
      this.props.setErrors("password", ErrorConstants.REQUIRED);
      isReadyToSubmit = false;
      checkMismatch = false;
    }

    if (checkMismatch) {
      let password = userToRegister.password;
      let confirmPassword = userToRegister.confirmPassword;
      if (password !== confirmPassword) {
        this.props.setErrors("confirmPassword", ErrorConstants.MISMATCH);
        isReadyToSubmit = false;
      }
    }

    if (isReadyToSubmit) {
      this.signUp();
    }
  }

  signUp() {
    window.location = "/";
  }

  render() {
    let errors = this.props.errors;
    return (
      <>
        <Header />
        <div className="register-page">
          <div className="registration-window panel-box c-padding-sm">
            <div className="page-title">
              <h3>REGISTER</h3>
            </div>
            <div className="reg-contents c-margin-top-md">
              <Container>
                <Row>
                  <Col>
                    <InputFormContainer
                      placeholder="First Name"
                      name="firstName"
                      errorMessage={errors.firstName}
                      setClassName="c-border-none c-padding-xs"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
                    <InputFormContainer
                      placeholder="Last Name"
                      name="lastName"
                      errorMessage={errors.lastName}
                      setClassName="c-border-none c-padding-xs"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <InputFormContainer
                      placeholder="Email"
                      name="email"
                      errorMessage={errors.email}
                      setClassName="c-border-none c-padding-xs large-input"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <InputFormContainer
                      type="password"
                      placeholder="Password"
                      name="password"
                      errorMessage={errors.password}
                      setClassName="c-border-none c-padding-xs input-highlight-green"
                      onChange={this.handleChange}

                    />
                  </Col>
                  <Col>
                    <InputFormContainer
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      errorMessage={errors.confirmPassword}
                      setClassName="c-border-none c-padding-xs"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
                <br /><br /><br />
                <Row>
                  <Col>&nbsp;</Col>
                  <Col>
                    <div className="c-align-center">
                      <button onClick={this.validate}>Sign Up</button>
                    </div>
                  </Col>
                  <Col>&nbsp;</Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  }
}


const mapStateToProps = state => ({
  state: state.register,
  registerUser: state.register.registerUser,
  errors: state.register.errors
})

const mapDispatchToProps = dispatch => ({
  setRegisterUser: (name, value) => dispatch(actions.setRegisterUser(name, value)),
  setErrors: (name, value) => dispatch(actions.setErrors(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);