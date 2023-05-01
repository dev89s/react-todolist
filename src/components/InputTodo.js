import { useEffect, useState } from "react";

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
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo ..."
          value={title}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default InputTodo;
