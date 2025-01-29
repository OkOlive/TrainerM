import { useState } from 'react';

export default function OperationsSection({ tasks, onAddTask }) {
  const [newTask, setNewTask] = useState({
    description: '',
    assignedTo: '',
    deadline: ''
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask({ description: '', assignedTo: '', deadline: '' });
  };

  return (
    <section className="dashboard-section">
      <h2>Operations Management</h2>
      
      <div className="operations-panel">
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Task description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Assigned to"
            value={newTask.assignedTo}
            onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
            required
          />
          <input
            type="date"
            value={newTask.deadline}
            onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
            required
          />
          <button type="submit">Add Task</button>
        </form>

        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <p>{task.description}</p>
              <p>Assigned to: {task.assignedTo}</p>
              <p>Deadline: {task.deadline}</p>
              <p>Status: {task.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}