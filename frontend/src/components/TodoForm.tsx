import React, { useState } from 'react';
import { createTodo } from '../api';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      await createTodo({
        title,
        description,
      });

      // 作成成功時の処理
      setTitle('');
      setDescription('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create New ToDo</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoForm;