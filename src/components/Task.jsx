const Task = ({ task, toggleTaskCompleted, deleteTask }) => {
  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: task.completed ? 'line-through' : 'none',
        userSelect: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 8px'
      }}
    >
      <span onClick={() => toggleTaskCompleted(task.id)} style={{ flex: 1 }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '12px' }}>
        ❌
      </button>
    </li>
  );
};

export default Task;