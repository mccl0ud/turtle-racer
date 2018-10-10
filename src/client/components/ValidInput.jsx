import React from 'react';

const ValidInput = (props) => {
  return <span onChange={props.sendAndUpdateValidInput()}>{props.validInput}</span>;
}

export default ValidInput;