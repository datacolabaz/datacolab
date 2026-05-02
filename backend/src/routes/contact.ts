import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail } from '../controllers/contactController';

export const contactRouter = Router();

const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
];

contactRouter.post('/', validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await sendContactEmail(req.body);
    return res.json({ success: true, message: 'Message received. We will be in touch soon!' });
  } catch (err) {
    console.error('Contact email error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});
