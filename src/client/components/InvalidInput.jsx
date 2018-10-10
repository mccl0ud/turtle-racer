import React from 'react';

const InvalidInput = (props) => {
  return <span onChange={props.sendAndUpdateInvalidInput()}>{props.invalidInput}</span>;
}

export default InvalidInput;