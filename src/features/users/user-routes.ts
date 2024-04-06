import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from './user-controller';
import { body } from 'express-validator';
import { validateRequest } from '@/middlewares/validate-request';

const router = express.Router();

router.post(
  '/',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('name').trim().notEmpty().withMessage('You must supply a name'),
  ],
  validateRequest,
  createUser,
);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
