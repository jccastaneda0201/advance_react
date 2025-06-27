import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState('Hello')[0];
  // const func = useState('Hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const [name, setName] = useState('peter');

  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
