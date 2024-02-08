import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onTodoDelete: (todoId: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onTodoDelete }) => {
  const handleTodoDelete = (todoId: number) => {
    onTodoDelete(todoId);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleTodoDelete} />
      ))}
    </div>
  );
};

export default TodoList;