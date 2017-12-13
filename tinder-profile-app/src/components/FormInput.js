import React from 'react';

function Form({ firstName, lastName, profileAvatar, onChange}) {
  return (
    <form>
        First Name:
        <input type="text" name="firstName" placeholder={ firstName } onChange={ onChange }/>

        Last Name:
        <input type="text" name="lastName" placeholder={ lastName } onChange={ onChange }/>

        Avatar URL:
        <input type="url" name="profileAvatar" placeholder="URL" onChange={ onChange }/>
    </form>

  );
}

export default Form;
