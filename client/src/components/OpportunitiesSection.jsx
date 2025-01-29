import { useState } from 'react';

export default function OpportunitiesSection({ opportunities, onInterest }) {
  const [filters, setFilters] = useState({ type: '', location: '' });

  const filteredOpps = opportunities.filter(opp => {
    return (!filters.type || opp.type === filters.type) &&
           (!filters.location || opp.location === filters.location);
  });

  return (
    <section className="dashboard-section">
      <h2>Training Opportunities</h2>
      
      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="">All Types</option>
          <option value="technical">Technical</option>
          <option value="soft-skills">Soft Skills</option>
          <option value="leadership">Leadership</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, location: e.target.value })}>
          <option value="">All Locations</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
      </div>

      <div className="opportunity-list">
        {filteredOpps.map(opp => (
          <div key={opp.id} className="opportunity-card">
            <h3>{opp.title}</h3>
            <p>Type: {opp.type}</p>
            <p>Location: {opp.location}</p>
            <button 
              onClick={() => onInterest(opp.id)}
              disabled={opp.status === 'interested'}
            >
              {opp.status === 'interested' ? 'Interested' : 'Express Interest'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}