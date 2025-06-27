import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });
  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState('24');
  // const [hobby, setHobby] = useState('Read books');

  const diplayPerson = () => {
    setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' });
    // setName('John');
    // setAge('28');
    // setHobby('Scream at the computer');
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" onClick={diplayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
