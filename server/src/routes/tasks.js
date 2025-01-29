import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { tasks } from '../data.js';

const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Add new task
router.post('/', (req, res) => {
  const newTask = {
    id: uuidv4(),
    status: 'pending',
    ...req.body
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

export default router;