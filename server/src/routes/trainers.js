import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { trainers } from '../data.js';

const router = express.Router();

// Get all trainers
router.get('/', (req, res) => {
  res.json(trainers);
});

// Add new trainer
router.post('/', (req, res) => {
  const newTrainer = {
    id: uuidv4(),
    ...req.body
  };
  trainers.push(newTrainer);
  res.status(201).json(newTrainer);
});

// Update trainer
router.put('/:id', (req, res) => {
  const index = trainers.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Trainer not found' });
  
  trainers[index] = { ...trainers[index], ...req.body };
  res.json(trainers[index]);
});

// Delete trainer
router.delete('/:id', (req, res) => {
  const index = trainers.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Trainer not found' });
  
  trainers.splice(index, 1);
  res.sendStatus(204);
});

export default router;