import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';

function Home() {
  return (
    <div className="todo-app">
      <Header />
      <TodosLogic />
    </div>
  );
}

export default Home;
