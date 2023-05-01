import TodoItem from "./TodoItem";

function TodosList({ todosProps, handleChange, delTodo, setUpdate }) {
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
      ))
      }
    </ul>
  );
}

export default TodosList