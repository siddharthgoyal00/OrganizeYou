


import axios from "axios";
import { BottomWarning } from "../../components/BottomWarning";
import { useState, useEffect } from "react";

interface Todo {
  _id: string;
  title: string;
  description: string;
}

export const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);  // State to hold todos
  const token = localStorage.getItem("token");

  // Fetch the todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/todo/alltodos",
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }
        );
        setTodos(response.data.todos);  // Assuming todos are in response.data.todos
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos(); // Call the function to fetch todos on mount
  }, []);
  return (
    <div>
      {/* Button to create a new todo */}
      <BottomWarning
        label="Create a Todo"
        buttonText="Add"
        to="/createtodo"
      />

      <h1>Your Todos</h1>

      {/* Render todos */}
      {todos.length === 0 ? (
        <p>No todos found. Create a new one!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
    
