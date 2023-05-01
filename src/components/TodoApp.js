import './TodoApp.css';
import Header from './Header';
import TodosLogic from './TodosLogic';

function TodoApp() {
  return (
    <div className="App">
      <Header/>
      <TodosLogic />
    </div>
  );
}

export default TodoApp;
