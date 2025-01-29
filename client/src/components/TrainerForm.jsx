import { useState } from 'react';

export default function TrainerForm({ onSubmit, initialData, onClose }) {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    expertise: [],
    availability: 'full-time',
    contact: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{initialData ? 'Edit Trainer' : 'Add New Trainer'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </label>

          <label>
            Expertise:
            <select
              multiple
              value={formData.expertise}
              onChange={(e) => setFormData({
                ...formData,
                expertise: Array.from(e.target.selectedOptions, option => option.value)
              })}
              required
            >
              <option value="technical">Technical</option>
              <option value="soft-skills">Soft Skills</option>
              <option value="leadership">Leadership</option>
            </select>
          </label>

          <label>
            Availability:
            <select
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>
          </label>

          <label>
            Contact:
            <input
              type="email"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
            />
          </label>

          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}