import { useEffect, useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

function TodosLogic() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
    {
      id: 4,
      title: 'Buy groceries',
      completed: false,
    },
    {
      id: 5,
      title: 'Daily exercise',
      completed: true,
    },
    {
      id: 6,
      title: 'House cleaning',
      completed: false,
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === id) {
          const newTodo = {
            ...todo,
            completed: !todo.completed,
          }
          return newTodo;
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      })
    ])
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    </>
  );
}

export default TodosLogic;