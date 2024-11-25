import express from 'express';
import { body, validationResult } from 'express-validator';

export const router = express.Router();

router.post('/discover', [
  body('productType').notEmpty().trim(),
  body('market').notEmpty().trim(),
  body('businessType').notEmpty().trim()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { productType, market, businessType } = req.body;

  // Mock incentives data - replace with actual API integration
  const incentives = [
    {
      name: 'Sustainability Grant',
      amount: 10000,
      description: 'For eco-friendly products',
      eligibility: 'SMB'
    },
    {
      name: 'RoDTEP Export Benefit',
      amount: '5%',
      description: 'Rebate on export value',
      eligibility: 'All exporters'
    }
  ];

  res.json({ incentives, market, businessType });
});