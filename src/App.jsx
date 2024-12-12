import React, { useState } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (description) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        description,
        isDone: false
      }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const editTask = (id, newDescription) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, description: newDescription } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <AddTask onAddTask={addTask} />
      <ListTask
        tasks={tasks}
        filter={filter}
        onSetFilter={setFilter}
        onToggleTask={toggleTask}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;