import React, { useState } from 'react';
import { deleteTodo } from '../api'; // 追記
import TodoEditForm from './TodoEditForm';

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onDelete: (todoId: number) => void; // 受け取る関数の型を定義
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = async () => {
    try {
      await deleteTodo(todo.id);

      onDelete(todo.id); // 渡されてきた関数(削除後のリスト更新処理)を実行
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button> {/* 追記 */}
        </div>
      ) : (
        <TodoEditForm todo={todo} onEdit={handleEditCancel} />
      )}
    </div>
  );
};

export default TodoItem;