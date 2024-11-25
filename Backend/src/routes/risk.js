import express from 'express';
import { param, validationResult } from 'express-validator';

export const router = express.Router();

router.get('/assessment/:market', [
  param('market').notEmpty().trim()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { market } = req.params;

  // Mock risk assessment data - replace with actual API integration
  const riskAssessment = {
    US: {
      score: 35,
      level: 'Low Risk',
      factors: {
        geopoliticalStability: 'High',
        tariffVolatility: 'Low',
        marketVolatility: 'Medium'
      }
    }
  };

  res.json(riskAssessment[market] || {
    score: 0,
    level: 'Unknown',
    factors: {}
  });
});