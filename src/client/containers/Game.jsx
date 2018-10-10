import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions/actions';
import Input from '../components/Input';
import Prompt from '../components/Prompt';

const mapStateToProps = store => ({
  prompt: store.prompt,
  userInput: store.userInput,
});

const mapDispatchToProps = dispatch => ({
  addPrompt: (str) => dispatch(actions.addPrompt(str)),
  getUserInput: () => dispatch(actions.getUserInput()),
  sendAndUpdateInputToServer: (str) => dispatch(actions.sendAndUpdateInputToServer(str)),
});

export class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // get a random prompt from the database
    axios.get('/getRandomPrompt')
      .then((response) => {
        // use the data from the request to dispatch an action to the state
        // note: double check what data this returns
        this.addPrompt(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // the request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // the request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // something happened in setting up the request that triggered an error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  render() {
    return (
      <div>
        {/* prompt takes prompt as props */}
        <Prompt prompt={this.props.prompt} />
        {/* input takes userInput and sendAndUpdateInputToServer as props */}
        <Input userInput={this.props.userInput} sendAndUpdateInputToServer={this.props.sendAndUpdateInputToServer} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
