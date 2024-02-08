import { useEffect, useState } from 'react';
import { getTodos } from './api';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, []);

  // Todo削除後、削除されたTodoを除いたTodoリストを表示する関数
  const handleTodoDelete = async (todoId: number) => {
    try {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoForm />
      <TodoList todos={todos} onTodoDelete={handleTodoDelete} />
    </div>
  );
};

export default App;