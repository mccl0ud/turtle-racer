import React from 'react';

const CurrChar = (props) => {
  return <span onChange={props.sendAndUpdateCurrChar()}>{props.currChar}</span>;
}

export default CurrChar;