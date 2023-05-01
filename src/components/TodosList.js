import TodoItem from "./TodoItem";

function TodosList({ todosProps, handleChange, delTodo }) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          />
      ))
      }
    </ul>
  );
}

export default TodosList