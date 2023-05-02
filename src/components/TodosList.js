import { PropTypes } from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todosProps, handleChange, delTodo, setUpdate,
}) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todosProps: PropTypes.shapeOf = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  },
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

TodosList.propTypes = {
  todosProps: PropTypes.isRequired,
};

export default TodosList;
