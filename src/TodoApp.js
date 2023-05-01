import './TodoApp.css';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';

function TodoApp() {
  return (
    <div className='Wrapper'>
      <div className="todo-app">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default TodoApp;
