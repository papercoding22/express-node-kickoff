import { Request, Response } from 'express';
import users from './User';

export const createUser = (req: Request, res: Response) => {
  const { id, name, email } = req.body;
  users[id] = { name, email };
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
  users[id] = { name, email };
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
