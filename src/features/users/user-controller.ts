import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import users from './User';

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  const id = uuidv4();
  users[id] = { name, email, id };
  res.status(201).json({
    status: 'success',
    data: {
      user: users[id],
    },
  });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    status: 'success',
    data: {
      user: users[id],
    },
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  users[id] = { ...users[id], name, email };
  res.status(200).json({
    status: 'success',
    data: {
      user: users[id],
    },
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  delete users[id];
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
