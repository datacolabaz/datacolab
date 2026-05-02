import { Router } from 'express';
import { body, validationResult } from 'express-validator';

export const roiRouter = Router();

roiRouter.post('/calculate', [
  body('hours').isInt({ min: 1, max: 80 }),
  body('clients').isInt({ min: 1, max: 5000 }),
  body('rate').isFloat({ min: 1 }),
], (req: any, res: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { hours, clients, rate, bizType } = req.body;

  // Multipliers by business type
  const multipliers: Record<string, number> = {
    edu: 0.80,
    clinic: 0.85,
    retail: 0.70,
    service: 0.75,
  };
  const multiplier = multipliers[bizType] ?? 0.75;

  const monthlyHours = hours * 4;
  const hoursSaved = Math.round(monthlyHours * multiplier);
  const monthlySavings = Math.round(hoursSaved * rate);
  const annualSavings = monthlySavings * 12;
  const errorReduction = 85; // %

  return res.json({
    hoursSaved,
    monthlySavings,
    annualSavings,
    errorReduction,
    clients,
    bizType,
  });
});
