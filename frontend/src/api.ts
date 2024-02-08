import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching todos:', error);
    throw error;
  }
};

// 略

export const createTodo = async (todoData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/todos`, todoData);
    return response.data;
  } catch (error) {
    console.error('Error while creating todo:', error);
    throw error;
  }
};