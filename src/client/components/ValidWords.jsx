import React from 'react';

const ValidWords = (props) => {
  return <span onChange={props.sendAndUpdateValidWords()}>{props.validWords}</span>;
}

export default ValidWords;