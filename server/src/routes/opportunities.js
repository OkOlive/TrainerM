
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { opportunities } from '../data.js';

const router = express.Router();

// Get all opportunities
router.get('/', (req, res) => {
  const { type, location } = req.query;
  let filtered = opportunities;
  
  if (type) filtered = filtered.filter(opp => opp.type === type);
  if (location) filtered = filtered.filter(opp => opp.location === location);
  
  res.json(filtered);
});

// Express interest
router.put('/:id/interest', (req, res) => {
  const opportunity = opportunities.find(opp => opp.id === req.params.id);
  if (!opportunity) return res.status(404).json({ message: 'Opportunity not found' });
  
  opportunity.status = 'interested';
  res.json(opportunity);
});

export default router;