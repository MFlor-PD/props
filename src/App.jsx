import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css';

const LOCAL_STORAGE_KEY = 'my-tasks';

const App = () => {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [
      { id: 1, text: 'Hacer la compra', completed: false },
      { id: 2, text: 'Llamar al médico', completed: true },
      { id: 3, text: 'Hacer ejercicio', completed: false }
    ];
  });
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  const newTask = {
    id: newId,
    text: taskText,
    completed: false
  };
  setTasks([...tasks, newTask]);
};

 const toggleTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  
  const deleteTask = (taskId) => {
  setTasks(tasks.filter(task => task.id !== taskId));
};

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
