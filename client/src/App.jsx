import { useState } from 'react';
import TrainerDashboard from './components/TrainerDashboard';
import OpportunitiesSection from './components/OpportunitiesSection';
import OperationsSection from './components/OperationsSection';
import './App.css';

function App() {
  const [trainers, setTrainers] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Trainer CRUD operations
  const addTrainer = (newTrainer) => {
    setTrainers([...trainers, { ...newTrainer, id: crypto.randomUUID() }]);
  };

  const updateTrainer = (id, updatedData) => {
    setTrainers(trainers.map(t => t.id === id ? { ...t, ...updatedData } : t));
  };

  const deleteTrainer = (id) => {
    setTrainers(trainers.filter(t => t.id !== id));
  };

  // Opportunity operations
  const expressInterest = (oppId) => {
    setOpportunities(opportunities.map(opp => 
      opp.id === oppId ? { ...opp, status: 'interested' } : opp
    ));
  };

  // Task operations
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: crypto.randomUUID(), status: 'pending' }]);
  };

  return (
    <div className="app">
      <TrainerDashboard 
        trainers={trainers} 
        onAdd={addTrainer} 
        onUpdate={updateTrainer} 
        onDelete={deleteTrainer} 
      />
      <OpportunitiesSection 
        opportunities={opportunities} 
        onInterest={expressInterest} 
      />
      <OperationsSection tasks={tasks} onAddTask={addTask} />
    </div>
  );
}

export default App;