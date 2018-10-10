import React from 'react';

const NextChar = (props) => {
  return <span onChange={props.sendAndUpdateNextChar()}>{props.nextChar}</span>;
}

export default NextChar;