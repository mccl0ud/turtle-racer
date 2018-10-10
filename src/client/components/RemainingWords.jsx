import React from 'react';

const RemainingWords = (props) => {
  return <span onChange={props.sendAndUpdateRemainingWords()}>{props.remainingWords}</span>;
}

export default RemainingWords;