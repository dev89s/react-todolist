import { useState } from 'react';
import { PropTypes } from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add Item');
    }
    e.target.focus();
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo ..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = { addTodoItem: PropTypes.func.isRequired };

export default InputTodo;
