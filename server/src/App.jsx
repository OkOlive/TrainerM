import { useState, useEffect } from 'react';

function App() {
  const [trainers, setTrainers] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trainersRes, oppsRes, tasksRes] = await Promise.all([
          fetch('http://localhost:5000/api/trainers'),
          fetch('http://localhost:5000/api/opportunities'),
          fetch('http://localhost:5000/api/tasks')
        ]);
        
        setTrainers(await trainersRes.json());
        setOpportunities(await oppsRes.json());
        setTasks(await tasksRes.json());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  // Updated trainer operations
  const addTrainer = async (newTrainer) => {
    const res = await fetch('http://localhost:5000/api/trainers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrainer)
    });
    setTrainers([...trainers, await res.json()]);
  };

  const updateTrainer = async (updatedData) => {
    const res = await fetch('http://localhost:5000/api/trainers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateTrainer)
    });
    setTrainers([...updatedData, await res.json()]);
  };

  // Similarly update other operations to use API calls...