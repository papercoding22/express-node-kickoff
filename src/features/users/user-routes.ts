import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from './user-controller';

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;