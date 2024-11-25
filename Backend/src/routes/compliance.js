import express from 'express';
import { body, validationResult } from 'express-validator';

export const router = express.Router();

router.post('/check', [
  body('productType').notEmpty().trim(),
  body('market').notEmpty().trim()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { productType, market } = req.body;

  // Mock compliance data - replace with actual API integration
  const complianceRequirements = {
    US: {
      'Eco-Friendly Packaging': [
        { requirement: 'FDA Approval', status: 'completed' },
        { requirement: 'ASTM D6400 Standards', status: 'pending' }
      ]
    }
  };

  res.json({
    requirements: complianceRequirements[market]?.[productType] || [],
    market,
    productType
  });
});