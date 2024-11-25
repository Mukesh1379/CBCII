import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { router as complianceRoutes } from './routes/compliance.js';
import { router as incentiveRoutes } from './routes/incentives.js';
import { router as riskRoutes } from './routes/risk.js';
import { router as authRoutes } from './routes/auth.js';
import { rateLimiterMiddleware } from './middleware/rateLimiter.js';
import logger from './utils/logger.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cbcii')
  .then(() => logger.info('Connected to MongoDB'))
  .catch(err => logger.error('MongoDB connection error:', err));

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimiterMiddleware);

// Routes
app.use('/api/compliance', complianceRoutes);
app.use('/api/incentives', incentiveRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  logger.info(`CBCII Platform running on port ${port}`);
});