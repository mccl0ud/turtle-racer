import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.css';
import Login from './containers/Login.jsx';
import Signup from './containers/Signup.jsx';
import * as actions from './actions/actions';

const mapStateToProps = store => ({
  isLoggedIn: store.login.isLoggedIn,
  loginSignupToggle: store.login.loginSignupToggle
});

const mapDispatchToProps = dispatch => ({
  setIsLoggedIn: bool => dispatch(actions.setIsLoggedIn(bool))
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-container">
        <h1>Ultimate Turtle Racer</h1>
        <div>{this.props.loginSignupToggle ? <Login /> : <Signup />}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
