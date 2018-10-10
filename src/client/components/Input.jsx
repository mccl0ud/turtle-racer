import React from 'react';

const Input = (props) => {
  const changeHandler = (e) => {
    // update current input in the store
    props.sendAndUpdateInputToServer();
  };

  return (
    <div>
      <form>
        <input type="text" value={props.userInput} onChange={changeHandler()}/>
      </form>
    </div>
  );
}

export default Input;