import React, { useEffect, useState } from 'react';
import { getTodos } from './api';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Todoの型定義
type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const App = () => {
  // Todoリストの初期値を空の配列に設定
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Error while fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;