import React from 'react';
import './Form.scss';
import Button from '../Button/Button';

function Form(props) {
  var input;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input type="text" ref={(i) => input = i} />
      <Button />
    </form>
  );
}

export default Form;
