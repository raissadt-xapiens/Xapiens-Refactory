import React from 'react';
import { TodoProvider } from './TodoContext';
import Navbar from './components/navbar';
import TodoList from './components/todolist';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Navbar />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
