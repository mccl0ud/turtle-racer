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

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.props.setLoginSignupToggle(true);
  }

  signup(e) {
    e.preventDefault();
    // TODO: signup logic
  }

  render() {
    return (
      <form id="signup-form" onSubmit={this.signup}>
        <h1>Signup</h1>
        <br />
        <input type="text" name="username" placeholder="Username" />
        <br />
        <input type="text" name="password" placeholder="Password" />
        <br />
        <input type="submit" value="Signup" />
        <input className="button" type="button" value="Back to Login" onClick={this.login} />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
