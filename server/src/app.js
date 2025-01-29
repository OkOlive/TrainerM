import express from 'express';
import cors from 'cors';
import trainerRoutes from './routes/trainers.js';
import opportunityRoutes from './routes/opportunities.js';
import taskRoutes from './routes/tasks.js';

const app = express();
const PORT = 5173

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/trainers', trainerRoutes);
app.use('/api/opportunities', opportunityRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});