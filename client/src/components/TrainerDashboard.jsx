import { useState } from 'react';
import TrainerForm from './TrainerForm';

export default function TrainerDashboard({ trainers, onAdd, onUpdate, onDelete }) {
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (formData) => {
    if (editingTrainer) {
      onUpdate(editingTrainer.id, formData);
    } else {
      onAdd(formData);
    }
    setShowForm(false);
  };

  return (
    <section className="dashboard-section">
      <h2>Trainer Management</h2>
      <button onClick={() => { setEditingTrainer(null); setShowForm(true); }}>
        Add Trainer
      </button>

      {showForm && (
        <TrainerForm 
          onSubmit={handleSubmit} 
          initialData={editingTrainer} 
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="trainer-list">
        {trainers.map(trainer => (
          <div key={trainer.id} className="trainer-card">
            <h3>{trainer.name}</h3>
            <p>Expertise: {trainer.expertise.join(', ')}</p>
            <p>Availability: {trainer.availability}</p>
            <p>Contact: {trainer.contact}</p>
            <div className="card-actions">
              <button onClick={() => { setEditingTrainer(trainer); setShowForm(true); }}>
                Edit
              </button>
              <button onClick={() => onDelete(trainer.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}