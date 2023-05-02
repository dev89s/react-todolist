import { useState } from 'react';
import { PropTypes } from 'prop-types';

import styles from '../styles/TodoItem.module.css';

function TodoItem({
  todo, handleChange, delTodo, setUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const completeStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <>
      <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChange(todo.id)}
          />
          {' '}
          {' '}
          <button type="button" onClick={handleEditing}>Edit</button>
          <button type="button" onClick={() => delTodo(todo.id)}>Delete</button>
          {' '}
          <span style={todo.completed ? completeStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          value={todo.title}
          className={styles.textInput}
          style={editMode}
          onChange={(e) => setUpdate(e.target.value, todo.id)}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf.isRequired = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  },
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
TodoItem.propTypes = { todo: PropTypes.isRequired };

export default TodoItem;
