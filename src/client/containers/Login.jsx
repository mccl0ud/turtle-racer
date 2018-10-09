import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  isLoggedIn: store.login.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  setIsLoggedIn: bool => dispatch(actions.setIsLoggedIn(bool)),
  setLoginSignupToggle: bool => dispatch(actions.setLoginSignupToggle(bool))
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login(e) {
    e.preventDefault();
    // login logic here
  }

  signup(e) {
    e.preventDefault();
    this.props.setLoginSignupToggle(false);
  }

  render() {
    return (
      <form id="login-form" onSubmit={this.login}>
        <h1>Login</h1>
        <br />
        <input type="text" name="username" placeholder="Username" />
        <br />
        <input type="text" name="password" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
        <input className="button" type="button" value="Create Account" onClick={this.signup} />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
